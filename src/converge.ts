import { chain, getValue, map, Mappable } from "./main";

// Given a joining function and a list of mappable, creates a list of
// values by applying all mappables to the value and joins the
// resulting list with the joining function

export function converge<A, B, C>(join: (vals: B[]) => C, fns: Mappable<A, B>[], value: A): C;
export function converge<A, B, C>(join: (vals: B[]) => C, fns: Mappable<A, B>[]): (value: A) => C;
export function converge<B, C>(
  join: (vals: B[]) => C
): <A>(fns: Mappable<A, B>[]) => (value: A) => C;

export function converge<A, B, C>(join: (vals: B[]) => C, fns?: Mappable<A, B>[], value?: A) {
  if (arguments.length === 1) {
    return function(_fns: Mappable<A, B>[], _value?: A) {
      return arguments.length === 1 ? converge(join, _fns) : converge(join, _fns, _value!);
    };
  } else if (arguments.length === 2) {
    return (_value: A) => converge(join, fns!, _value);
  }

  const val = getValue(value);

  return chain(fns!)
    .bind(map((fn: Mappable<A, B>) => fn(val!)))
    .bind(join)
    .getValue();
}
