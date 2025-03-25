/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

"use strict";

const getOwnPropertySymbols = Object.getOwnPropertySymbols;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val: any): object {
  if (val === null || val === undefined) {
    throw new TypeError(
      "Object.assign cannot be called with null or undefined",
    );
  }

  return Object(val);
}

function shouldUseNative(): boolean {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    const test1 = new String("abc");
    // @ts-expect-error: test1[5] should be allowed to modify its 5th index
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    const test2: Record<string, number> = {};
    for (let i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    const order2 = Object.getOwnPropertyNames(test2).map((n) => test2[n]);
    if (order2.join("") !== "0123456789") {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    const test3: Record<string, string> = {};
    "abcdefghijklmnopqrst".split("").forEach((letter) => {
      test3[letter] = letter;
    });
    if (
      Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst"
    ) {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

interface AssignFunction {
  <T extends object>(target: T, ...sources: Array<Partial<T>>): T;
  (target: object, ...sources: Array<any>): object;
}

const assign: AssignFunction = shouldUseNative()
  ? Object.assign
  : function (target: object, ...sources: Array<any>): object {
      const to = toObject(target);
      sources.forEach((from: object) => {
        const symbols = getOwnPropertySymbols
          ? getOwnPropertySymbols(from)
          : [];
        for (const key in from) {
          if (hasOwnProperty.call(from, key)) {
            (to as any)[key] = (from as any)[key];
          }
        }
        symbols.forEach((symbol: symbol) => {
          if (propIsEnumerable.call(from, symbol)) {
            (to as any)[symbol] = (from as any)[symbol];
          }
        });
      });

      return to;
    };

export default assign;
