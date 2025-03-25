"use strict";

/**
 * RegExp to match field-name in RFC 7230 sec 3.2
 *
 * field-name    = token
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 */

const FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

// Define interface for response-like objects
interface ResponseLike {
  getHeader(name: string): string | string[] | undefined;
  setHeader(name: string, value: string): void;
}

/**
 * Append a field to a vary header.
 *
 * @param {String} header
 * @param {String|Array<string>} field
 * @return {String}
 * @public
 */

function append(header: string, field: string | string[]): string {
  if (typeof header !== "string") {
    throw new TypeError("header argument is required");
  }

  if (!field) {
    throw new TypeError("field argument is required");
  }

  // get fields array
  const fields: string[] = !Array.isArray(field) ? parse(String(field)) : field;

  // assert on invalid field names
  for (let j = 0; j < fields.length; j++) {
    if (!FIELD_NAME_REGEXP.test(fields[j])) {
      throw new TypeError("field argument contains an invalid header name");
    }
  }

  // existing, unspecified vary
  if (header === "*") {
    return header;
  }

  // enumerate current values
  let val: string = header;
  const vals: string[] = parse(header.toLowerCase());

  // unspecified vary
  if (fields.includes("*") || vals.includes("*")) {
    return "*";
  }

  for (let i = 0; i < fields.length; i++) {
    const fld: string = fields[i].toLowerCase();

    // append value (case-preserving)
    if (!vals.includes(fld)) {
      vals.push(fld);
      val = val ? `${val}, ${fields[i]}` : fields[i];
    }
  }

  return val;
}

/**
 * Parse a vary header into an array.
 *
 * @param {String} header
 * @return {Array<string>}
 * @private
 */

function parse(header: string): string[] {
  let end: number = 0;
  const list: string[] = [];
  let start: number = 0;

  // gather tokens
  for (let i = 0, len = header.length; i < len; i++) {
    switch (header.charCodeAt(i)) {
      case 0x20 /*   */:
        if (start === end) {
          start = end = i + 1;
        }
        break;
      case 0x2c /* , */:
        list.push(header.substring(start, end));
        start = end = i + 1;
        break;
      default:
        end = i + 1;
        break;
    }
  }

  // final token
  list.push(header.substring(start, end));

  return list;
}

/**
 * Mark that a request is varied on a header field.
 *
 * @param {ResponseLike} res
 * @param {String|Array<string>} field
 * @public
 */

function vary(res: ResponseLike, field: string | string[]): void {
  if (!res || !res.getHeader || !res.setHeader) {
    // quack quack
    throw new TypeError("res argument is required");
  }

  // get existing header
  const val: string | string[] | undefined = res.getHeader("Vary");
  const header: string = Array.isArray(val)
    ? val.join(", ")
    : String(val || "");

  // set new header
  const newVal: string = append(header, field);
  if (newVal) {
    res.setHeader("Vary", newVal);
  }
}

export default vary;
