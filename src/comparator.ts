import { Comparator, getValue } from "./main";

// creates a comparator from an ordering function

export function comparator<A>(
  isInOrder: (a: A, b: A) => boolean
): Comparator<A> {
  return (a: A, b: A) => {
    const valA = getValue(a);
    const valB = getValue(b);

    return isInOrder(valA, valB) ? 1 : isInOrder(valB, valA) ? -1 : 0;
  };
}
