import { Dictionary, getValueOr } from "./main.ts";

type MixedCmp<A, B> = (a: A, b: B) => boolean;
export function innerJoin<
  A extends Dictionary = Dictionary,
  B extends Dictionary = Dictionary
>(match: MixedCmp<A, B>, as: A[], bs: B[]): (A & B)[];

export function innerJoin<
  A extends Dictionary = Dictionary,
  B extends Dictionary = Dictionary
>(match: MixedCmp<A, B>, as: A[]): (bs: B[]) => (A & B)[];

export function innerJoin<
  A extends Dictionary = Dictionary,
  B extends Dictionary = Dictionary
>(match: MixedCmp<A, B>): (as: A[]) => (bs: B[]) => (A & B)[];

export function innerJoin<
  A extends Dictionary = Dictionary,
  B extends Dictionary = Dictionary
>(match: MixedCmp<A, B>, as?: A[], bs?: B[]) {
  if (arguments.length === 1) {
    return function (_as: A[], _bs?: B[]) {
      return arguments.length === 1
        ? innerJoin(match, _as)
        : innerJoin(match, _as, _bs!);
    };
  } else if (arguments.length === 2) {
    return (_bs: B[]) => innerJoin(match, as!, _bs);
  }

  const result: (A & B)[] = [];

  const collA = getValueOr([], as);
  const collB = getValueOr([], bs);

  let b = 0;
  for (let a = 0; a < collA.length; ++a) {
    for (b = 0; b < collB.length; ++b) {
      if (match(collA[a], collB[b])) {
        result.push({ ...collA[a], ...collB[b] });
      }
    }
  }

  return result;
}
