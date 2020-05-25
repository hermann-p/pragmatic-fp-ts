import { Mappable } from "./main";

export function zipMap<A, B, C>(fn: Mappable<[A, B], C>, as: A[], bs: B[]): C[];
export function zipMap<A, B, C>(
  fn: Mappable<[A, B], C>,
  as: A[]
): (bs: B[]) => C[];
export function zipMap<A, B, C>(
  fn: Mappable<[A, B], C>
): (as: A[]) => (bs: B[]) => C[];

export function zipMap<A, B, C>(fn: Mappable<[A, B], C>, as?: A[], bs?: B[]) {
  if (arguments.length === 1) {
    return function (as_: A[], bs_?: B[]) {
      return arguments.length === 1 ? zipMap(fn, as_) : zipMap(fn, as_, bs_!);
    };
  } else if (arguments.length === 2) {
    return (bs_: B[]) => zipMap(fn, as!, bs_);
  }

  const result: C[] = [];

  const aa = as || [];
  const bb = bs || [];

  for (let i = 0; i < aa.length && bb.length; ++i) {
    result.push(fn([aa[i], bb[i]]));
  }
  return result;
}
