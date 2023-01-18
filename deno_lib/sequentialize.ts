import { chain, getValue } from "./main.ts";

export function sequentialize<A, B>(
  fn: (value: A) => Promise<B>,
  coll: A[]
): Promise<B[]>;

export function sequentialize<A, B>(
  fn: (value: A) => Promise<B>
): (coll: A[]) => Promise<B[]>;

export function sequentialize<A, B>(fn: (value: A) => Promise<B>, coll?: A[]) {
  if (arguments.length === 1) {
    return (_coll: A[]) => sequentialize(fn, _coll) as any;
  }

  return chain(coll)
    .bind<Promise<B[]>>(async (elements) => {
      if (!elements) {
        return [];
      }
      const results = Array<B>(elements.length);
      for (let i = 0; i < elements.length; ++i) {
        results[i] = await fn(elements[i]).then(getValue);
      }
      return results;
    })
    .getValue();
}
