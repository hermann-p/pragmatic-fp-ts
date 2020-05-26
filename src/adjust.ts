import { Endomorphism, getValueOr } from "./main";

// Updates array item at index by applying function

export function adjust<A>(idx: number, fn: Endomorphism<A>, coll: A[]): A[];
export function adjust<A>(idx: number, fn: Endomorphism<A>): (coll: A[]) => A[];
export function adjust(
  idx: number
): <A>(fn: Endomorphism<A>) => (coll: A[]) => A[];

export function adjust<A>(idx: number, fn?: Endomorphism<A>, coll?: A[]) {
  if (arguments.length === 1) {
    return function (fn_: Endomorphism<A>, coll_?: A[]) {
      return arguments.length === 1
        ? adjust(idx, fn_)
        : adjust(idx, fn_, coll_!);
    };
  } else if (arguments.length === 2) {
    return (_coll: A[]) => adjust(idx, fn!, _coll);
  } else {
    const input = getValueOr([], coll!);
    const output = Array.from(input);
    const i = getValueOr(-1, idx!);
    if (0 <= i! && i! < input.length) {
      output[i] = fn!(input[i]);
    }
    return output;
  }
}
