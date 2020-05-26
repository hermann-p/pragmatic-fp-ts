import { Comparator, getValueOr, isNil, isSome, Mappable } from "./main";

export function descend<A>(
  toComparable: Mappable<A, string | number>
): Comparator<A> {
  return (a: A, b: A) => {
    const valA = getValueOr(null, a);
    const valB = getValueOr(null, b);
    const cvalA = valA && toComparable(valA);
    const cvalB = valB && toComparable(valB);

    if (cvalA === cvalB) {
      return 0;
    } else if (isSome(cvalA) && isSome(cvalB)) {
      return cvalA! > cvalB! ? 1 : -1;
    } else if (isNil(cvalA)) {
      return -1;
    } else {
      return 1;
    }
  };
}
