import { Dictionary, equals, getValueOr } from "./main";

// tests if the the values of the given prop equals in both objects

export function eqProps<V extends {}, K extends keyof V>(
  propName: K,
  a: V,
  b: V
): boolean;
export function eqProps<T extends {}, K extends keyof T>(
  propName: K,
  a: T
): (b: T) => boolean;
export function eqProps<K extends string>(
  propName: K
): <T extends {}>(a: T) => (b: T) => boolean;

export function eqProps<T extends Dictionary>(propName: string, a?: T, b?: T) {
  if (arguments.length === 1) {
    return function (_a: T, _b?: T) {
      return arguments.length === 1
        ? eqProps(propName, _a)
        : eqProps(propName, _a, _b!);
    };
  } else if (arguments.length === 2) {
    return (_b: T) => eqProps(propName, a!, _b);
  }

  return equals(
    getValueOr({} as any, a)[propName],
    getValueOr({} as any, b)[propName]
  );
}
