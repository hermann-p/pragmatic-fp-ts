import { Dictionary, getValueOr, Mappable } from "./main.ts";

const mapObj = <A, B>(fn: Mappable<A, B>, dict: Dictionary<A>): Dictionary<B> =>
  Object.keys(dict).reduce((accum: Dictionary<B>, key: string) => {
    accum[key] = fn(dict[key]);
    return accum;
  }, {} as Dictionary<B>);

export function map<A, B>(fn: Mappable<A, B>, coll: A[]): B[];
export function map<A, B>(
  fn: Mappable<A, B>,
  coll: Dictionary<A>
): Dictionary<B>;
export function map<A, B>(
  fn: Mappable<A, B>
): <C extends A[] | Dictionary<A>>(
  coll: C
) => C extends A[] ? B[] : Dictionary<B>;

export function map<A, B>(fn: Mappable<A, B>, coll?: A[] | Dictionary<A>): any {
  if (arguments.length === 1) {
    return (_coll: A[]) => map(fn, _coll);
  }

  const theColl = getValueOr([], coll);
  return theColl instanceof Array ? theColl.map(fn) : mapObj(fn, theColl);
}
