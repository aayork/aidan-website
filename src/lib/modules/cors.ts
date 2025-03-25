import assign from "@/lib/modules/object-assign";
import vary from "@/lib/modules/vary";
import { NextFunction, Request, Response } from "express";

interface CorsOptions {
  origin?:
    | string
    | string[]
    | RegExp
    | ((
        origin: string,
        callback: (err: Error | null, allow?: boolean) => void,
      ) => void)
    | boolean;
  methods?: string | string[];
  allowedHeaders?: string | string[];
  exposedHeaders?: string | string[];
  credentials?: boolean;
  maxAge?: number;
  preflightContinue?: boolean;
  optionsSuccessStatus?: number;
  headers?: string | string[];
}

interface ResponseLike {
  getHeader(name: string): string | string[] | undefined;
  setHeader(name: string, value: string | string[]): void;
}

interface CorsHeader {
  key: string;
  value: string | boolean;
}

const defaults: CorsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

function isString(s: unknown): s is string {
  return typeof s === "string" || s instanceof String;
}

function isOriginAllowed(
  origin: string,
  allowedOrigin: CorsOptions["origin"],
): boolean {
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

function configureOrigin(options: CorsOptions, req: Request): CorsHeader[] {
  const requestOrigin = req.headers.origin;
  const headers: CorsHeader[] = [];
  let isAllowed: boolean;

  if (!options.origin || options.origin === "*") {
    headers.push({ key: "Access-Control-Allow-Origin", value: "*" });
  } else if (isString(options.origin)) {
    headers.push({ key: "Access-Control-Allow-Origin", value: options.origin });
    headers.push({ key: "Vary", value: "Origin" });
  } else {
    isAllowed = requestOrigin
      ? isOriginAllowed(requestOrigin, options.origin)
      : false;
    headers.push({
      key: "Access-Control-Allow-Origin",
      value: isAllowed && requestOrigin ? requestOrigin : false,
    });
    headers.push({ key: "Vary", value: "Origin" });
  }

  return headers;
}

function configureMethods(options: CorsOptions): CorsHeader {
  let methods = options.methods;
  if (Array.isArray(methods)) {
    methods = methods.join(",");
  }
  return { key: "Access-Control-Allow-Methods", value: methods || "" };
}

function configureCredentials(options: CorsOptions): CorsHeader | null {
  if (options.credentials === true) {
    return { key: "Access-Control-Allow-Credentials", value: "true" };
  }
  return null;
}

function configureAllowedHeaders(
  options: CorsOptions,
  req: Request,
): CorsHeader[] {
  let allowedHeaders = options.allowedHeaders || options.headers;
  const headers: CorsHeader[] = [];

  if (!allowedHeaders) {
    allowedHeaders = req.headers["access-control-request-headers"];
    headers.push({ key: "Vary", value: "Access-Control-Request-Headers" });
  } else if (Array.isArray(allowedHeaders)) {
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

function configureExposedHeaders(options: CorsOptions): CorsHeader | null {
  let headers = options.exposedHeaders;
  if (!headers) return null;
  if (Array.isArray(headers)) headers = headers.join(",");
  if (typeof headers === "string") {
    return headers.length
      ? { key: "Access-Control-Expose-Headers", value: headers }
      : null;
  }
  return null;
}

function configureMaxAge(options: CorsOptions): CorsHeader | null {
  const maxAge = options.maxAge?.toString();
  return maxAge && maxAge.length
    ? { key: "Access-Control-Max-Age", value: maxAge }
    : null;
}

function applyHeaders(
  headers: (CorsHeader | CorsHeader[] | null)[],
  res: Response,
): void {
  headers.forEach((header) => {
    if (header) {
      if (Array.isArray(header)) {
        applyHeaders(header, res);
      } else if (header.key === "Vary" && header.value) {
        // Add type assertion here
        vary(res as unknown as ResponseLike, header.value.toString());
      } else if (header.value) {
        res.setHeader(header.key, header.value.toString());
      }
    }
  });
}

function cors(
  options: CorsOptions,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const headers: (CorsHeader | CorsHeader[] | null)[] = [];
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
      res.statusCode = options.optionsSuccessStatus || 204;
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

type OptionsCallback = (
  req: Request,
  callback: (err: Error | null, options?: CorsOptions) => void,
) => void;

function middlewareWrapper(o: CorsOptions | OptionsCallback) {
  const optionsCallback: OptionsCallback =
    typeof o === "function" ? o : (req, cb) => cb(null, o);

  return function corsMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    optionsCallback(req, (err, options) => {
      if (err) {
        next(err);
      } else {
        // Create corsOptions with proper type annotation
        const corsOptions: CorsOptions = assign({}, defaults, options || {});

        // Check if origin is a function
        if (typeof corsOptions.origin === "function") {
          const originCallback = corsOptions.origin;
          originCallback(req.headers.origin ?? "", (err2, origin) => {
            if (err2 || !origin) {
              next(err2 || new Error("Origin not allowed"));
            } else {
              corsOptions.origin = origin;
              cors(corsOptions, req, res, next);
            }
          });
        } else {
          cors(corsOptions, req, res, next);
        }
      }
    });
  };
}

export default middlewareWrapper;
