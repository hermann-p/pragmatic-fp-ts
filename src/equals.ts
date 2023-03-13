import { getValue, isMonad, when } from "./main";

// Deep compare two values. B-u-f-f-e-r comparison not implemented.
// adopted from https://github.com/epoberezkin/fast-deep-equal
const _equals = (a: any, b: any) => {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;

  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor) return false;

    if (a instanceof Array) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; ++i) if (!_equals(a[i], b[i])) return false;
      return true;
    }

    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      for (let e of a.entries()) if (!b.has(e[0]) || !_equals(e[1], b.get(e[0]))) return false;

      return true;
    }

    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      for (let e of a.entries()) if (!b.has(e[0])) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf === b.valueOf;
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    const keys = Object.keys(a);
    if (!_equals(keys, Object.keys(b))) return false;
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      if (!_equals(a[key], b[key])) return false;
    }
    return true;
  }

  return a !== a && b !== b; // both NaN
};

export function equals<A>(a: A, b: A): boolean;
export function equals<A>(a: A): (b: A) => boolean;

export function equals<A>(a: A, b?: A) {
  if (arguments.length === 1) {
    return (_b: A) => equals(a, _b);
  }

  const valA = when(isMonad, getValue, a);
  const valB = when(isMonad, getValue, b);
  return _equals(valA, valB);
}
