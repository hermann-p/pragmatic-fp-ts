import { Dictionary, Effect, getValueOr } from "./main";

// performs side effects on a list or the values of an object

type ObjEffect<A> = (value: A, key?: string) => void;
export function forEach<A>(effect: Effect<A>, coll: A[]): A[];
export function forEach<A>(
  effect: Effect<A>,
  coll: Dictionary<A>
): Dictionary<A>;
export function forEach<A>(
  effect: Effect<A>
): <B extends A[] | Dictionary<A>>(
  coll: B
) => B extends A[] ? A[] : Dictionary<A>;

export function forEach<A>(fn: Function, data?: A[] | Dictionary<A>) {
  if (arguments.length === 1) {
    return (theData: A[] | Dictionary<A>) => forEach(fn as any, theData as any);
  }

  const theData = getValueOr([], data);

  if (theData instanceof Array) {
    theData.forEach(fn as Effect<A>);
  } else {
    const keys = Object.keys(theData);
    keys.forEach((key) => (fn as ObjEffect<A>)(theData[key], key));
  }

  return theData;
}
