import { getValue, Mappable } from "./main.ts";

// returns first result if trutyh, else second

export function eitherOr<A, B>(
  f: Mappable<A, B>,
  g: Mappable<A, B>,
  value: A
): B;
export function eitherOr<A, B>(
  f: Mappable<A, B>,
  g: Mappable<A, B>
): (value: A) => B;
export function eitherOr<A, B>(
  f: Mappable<A, B>
): (g: Mappable<A, B>) => (value: A) => B;

export function eitherOr<A, B>(
  f: Mappable<A, B>,
  g?: Mappable<A, B>,
  value?: A
) {
  if (arguments.length === 1) {
    return function (_g: Mappable<A, B>, _value?: A) {
      return arguments.length === 1
        ? eitherOr(f, _g)
        : eitherOr(f, _g, _value!);
    };
  } else if (arguments.length === 2) {
    return (_value: A) => eitherOr(f, g!, _value);
  }

  const val = getValue(value);
  return f(val) || g!(val);
}
