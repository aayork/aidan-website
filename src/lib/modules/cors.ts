"use strict";

import assign from "@modules/object-assign";
import vary from "@modules/vary";

const defaults = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

function isString(s) {
  return typeof s === "string" || s instanceof String;
}

function isOriginAllowed(origin, allowedOrigin) {
  if (Array.isArray(allowedOrigin)) {
    for (let i = 0; i < allowedOrigin.length; ++i) {
      if (isOriginAllowed(origin, allowedOrigin[i])) {
        return true;
      }
    }
    return false;
  } else if (isString(allowedOrigin)) {
    return origin === allowedOrigin;
  } else if (allowedOrigin instanceof RegExp) {
    return allowedOrigin.test(origin);
  } else {
    return !!allowedOrigin;
  }
}

function configureOrigin(options, req) {
  const requestOrigin = req.headers.origin;
  const headers = [];
  let isAllowed;

  if (!options.origin || options.origin === "*") {
    headers.push({ key: "Access-Control-Allow-Origin", value: "*" });
  } else if (isString(options.origin)) {
    headers.push({ key: "Access-Control-Allow-Origin", value: options.origin });
    headers.push({ key: "Vary", value: "Origin" });
  } else {
    isAllowed = isOriginAllowed(requestOrigin, options.origin);
    headers.push({
      key: "Access-Control-Allow-Origin",
      value: isAllowed ? requestOrigin : false,
    });
    headers.push({ key: "Vary", value: "Origin" });
  }

  return headers;
}

function configureMethods(options) {
  let methods = options.methods;
  if (methods.join) {
    methods = options.methods.join(",");
  }
  return { key: "Access-Control-Allow-Methods", value: methods };
}

function configureCredentials(options) {
  if (options.credentials === true) {
    return { key: "Access-Control-Allow-Credentials", value: "true" };
  }
  return null;
}

function configureAllowedHeaders(options, req) {
  let allowedHeaders = options.allowedHeaders || options.headers;
  const headers = [];

  if (!allowedHeaders) {
    allowedHeaders = req.headers["access-control-request-headers"];
    headers.push({ key: "Vary", value: "Access-Control-Request-Headers" });
  } else if (allowedHeaders.join) {
    allowedHeaders = allowedHeaders.join(",");
  }

  if (allowedHeaders && allowedHeaders.length) {
    headers.push({
      key: "Access-Control-Allow-Headers",
      value: allowedHeaders,
    });
  }

  return headers;
}

function configureExposedHeaders(options) {
  let headers = options.exposedHeaders;
  if (!headers) return null;
  if (headers.join) headers = headers.join(",");
  return headers.length
    ? { key: "Access-Control-Expose-Headers", value: headers }
    : null;
}

function configureMaxAge(options) {
  const maxAge = options.maxAge && options.maxAge.toString();
  return maxAge && maxAge.length
    ? { key: "Access-Control-Max-Age", value: maxAge }
    : null;
}

function applyHeaders(headers, res) {
  headers.forEach((header) => {
    if (header) {
      if (Array.isArray(header)) {
        applyHeaders(header, res);
      } else if (header.key === "Vary" && header.value) {
        vary(res, header.value);
      } else if (header.value) {
        res.setHeader(header.key, header.value);
      }
    }
  });
}

function cors(options, req, res, next) {
  const headers = [];
  const method = req.method?.toUpperCase();

  if (method === "OPTIONS") {
    headers.push(
      configureOrigin(options, req),
      configureCredentials(options),
      configureMethods(options),
      configureAllowedHeaders(options, req),
      configureMaxAge(options),
      configureExposedHeaders(options),
    );
    applyHeaders(headers, res);

    if (options.preflightContinue) {
      next();
    } else {
      res.statusCode = options.optionsSuccessStatus;
      res.setHeader("Content-Length", "0");
      res.end();
    }
  } else {
    headers.push(
      configureOrigin(options, req),
      configureCredentials(options),
      configureExposedHeaders(options),
    );
    applyHeaders(headers, res);
    next();
  }
}

function middlewareWrapper(o) {
  const optionsCallback =
    typeof o === "function" ? o : (req, cb) => cb(null, o);
  return function corsMiddleware(req, res, next) {
    optionsCallback(req, (err, options) => {
      if (err) {
        next(err);
      } else {
        const corsOptions = assign({}, defaults, options);
        const originCallback =
          typeof corsOptions.origin === "function"
            ? corsOptions.origin
            : (origin, cb) => cb(null, corsOptions.origin);

        if (originCallback) {
          originCallback(req.headers.origin, (err2, origin) => {
            if (err2 || !origin) {
              next(err2);
            } else {
              corsOptions.origin = origin;
              cors(corsOptions, req, res, next);
            }
          });
        } else {
          next();
        }
      }
    });
  };
}

export default middlewareWrapper;
