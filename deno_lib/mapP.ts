import { chain, getValue } from "./main.ts";

export function mapP<A, B>(
  fn: (value: A) => Promise<B>,
  coll: A[]
): Promise<B[]>;

export function mapP<A, B>(
  fn: (value: A) => Promise<B>
): (coll: A[]) => Promise<B[]>;

export function mapP<A, B>(fn: (value: A) => Promise<B>, coll?: A[]) {
  if (arguments.length === 1) {
    return (_coll: A[]) => mapP(fn, _coll) as any;
  }

  return chain(coll)
    .bind((elements) => elements!.map((element) => fn(element).then(getValue)))
    .bind((promises) => Promise.all(promises))
    .getValue();
}
