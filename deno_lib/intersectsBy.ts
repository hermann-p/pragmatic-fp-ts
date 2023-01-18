import { Mappable } from "./main.ts";

export function intersectsBy<A, B>(getComp: Mappable<A, B>, setA: A[], setB: A[]): boolean;
export function intersectsBy<A, B>(getComp: Mappable<A, B>, setA: A[]): (setB: A[]) => boolean;
export function intersectsBy<A, B>(getComp: Mappable<A, B>): (setA: A[]) => (setB: A[]) => boolean;

export function intersectsBy<A, B>(getComp: Mappable<A, B>, setA?: A[], setB?: A[]) {
  if (arguments.length === 2) return (setB_: A[]) => intersectsBy(getComp, setA!, setB_);
  else if (arguments.length === 1)
    return function(setA_: A[], setB_?: A[]) {
      return arguments.length === 1
        ? intersectsBy(getComp, setA_)
        : intersectsBy(getComp, setA_, setB_!);
    };

  const ii = new Set((setA ?? []).map(getComp));
  const bb = setB ?? [];
  for (let i = 0; i < bb.length; ++i) if (ii.has(getComp(bb[i]))) return true;

  return false;
}
