const hasOwn = {}.hasOwnProperty;
const localhostDomainRE = /^localhost[:?\d]*(?:[^:?\d]\S*)?$/;
const nonLocalhostDomainRE = /^[^\s.]+\.\S{2,}$/;
const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;

export function noop() {
  return null;
}

export function pluralize(text: string, count: number) {
  return count > 1 || count === 0 ? `${text}s` : text;
}

export function getOrdinalNumber(n) {
  return (
    n +
    (n > 0
      ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : "")
  );
}

export function deepEqual(x: any, y: any): boolean {
  return x && y && typeof x === "object" && typeof y === "object"
    ? Object.keys(x).length === Object.keys(y).length &&
        Object.keys(x).reduce(
          (isEqual, key) => isEqual && deepEqual(x[key], y[key]),
          true,
        )
    : x === y;
}

export function getDomainFromEmailWithoutAnySubdomain(email: string): string {
  const atIndex = email.lastIndexOf("@");
  if (atIndex === -1) {
    return "";
  }

  const domain = email.slice(atIndex + 1);
  const domainParts = domain.split(".");

  if (domainParts.length < 2) {
    return "";
  }

  return domainParts.slice(-2).join(".");
}

export function isEmpty(value: any): boolean {
  return value == null || value === "";
}

export function isUrl(string: any) {
  if (typeof string !== "string") {
    return false;
  }

  const match = string.match(protocolAndDomainRE);
  if (!match) {
    return false;
  }

  const everythingAfterProtocol = match[1];
  if (!everythingAfterProtocol) {
    return false;
  }

  return (
    localhostDomainRE.test(everythingAfterProtocol) ||
    nonLocalhostDomainRE.test(everythingAfterProtocol)
  );
}

export function onHandleThemeChange(className?: string) {
  const body = document.body;

  body.classList.forEach((existingClass) => {
    if (existingClass.startsWith("theme-")) {
      body.classList.remove(existingClass);
    }
  });

  if (className) {
    body.classList.add(className);
  } else {
    body.classList.add("theme-light");
  }
}

export function classNames(...args: any[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames(...arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === "object") {
      if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
      } else {
        for (const key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.join(" ");
}
