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

export function getOrdinalNumber(n: number): string {
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

export function onHandleFontChange(className?: string) {
  const body = document.body;

  if (className) {
    body.classList.forEach((existingClass) => {
      if (existingClass.startsWith("font-")) {
        body.classList.remove(existingClass);
      }
    });

    body.classList.add(className);
    return;
  }

  body.classList.forEach((existingClass) => {
    if (existingClass.startsWith("font-")) {
      body.classList.remove(existingClass);
    }
  });
}

export const isFocusableElement = (
  element: EventTarget | null,
): element is HTMLElement => {
  if (!element || !(element instanceof HTMLElement)) {
    return false;
  }

  const focusableSelectors = [
    "a[href]",
    "button",
    "input",
    "select",
    "textarea",
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ];

  return element.matches(focusableSelectors.join(", "));
};

export const findNextFocusable = (
  element: Element | null,
  direction: "next" | "previous" = "next",
): HTMLElement | null => {
  if (!element) return null;

  const focusableSelectors = [
    "a[href]",
    "button",
    "input",
    "select",
    "textarea",
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ];

  const focusableElements = Array.from(
    document.querySelectorAll<HTMLElement>(focusableSelectors.join(", ")),
  );

  const currentIndex = focusableElements.indexOf(element as HTMLElement);

  if (currentIndex !== -1) {
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % focusableElements.length
        : (currentIndex - 1 + focusableElements.length) %
          focusableElements.length;

    return focusableElements[nextIndex];
  }

  return null;
};

export const findFocusableDescendant = (
  container: Element | null,
  currentFocused: Element | null = null,
  direction: "next" | "previous" = "next",
): HTMLElement | null => {
  if (!container) return null;

  const focusableElements = Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]',
    ),
  );

  if (focusableElements.length === 0) return null;

  let index = 0;
  if (currentFocused) {
    const currentIndex = focusableElements.indexOf(
      currentFocused as HTMLElement,
    );
    if (currentIndex !== -1) {
      index = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    }
  }

  if (index >= 0 && index < focusableElements.length) {
    return focusableElements[index];
  }

  return null;
};

export function leftPad(input: string, length: number): string {
  const zerosNeeded = length - input.length;
  if (zerosNeeded <= 0) {
    return input;
  }

  const zeros = "0".repeat(zerosNeeded);

  return zeros + input;
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
