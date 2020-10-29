import {} from "./main";

export function intersects<A>(setA: A[], setB: A[]): boolean;
export function intersects<A>(setA: A[]): (setB: A[]) => boolean;

export function intersects<A>(setA: A[], setB?: A[]) {
  if (arguments.length === 1) return (setB_: A[]) => intersects(setA, setB_);

  const intersection = new Set(setA);
  const bb = setB ?? [];

  for (let i = 0; i < bb.length; ++i) {
    if (!intersection.has(bb[i])) return true;
  }
  return false;
}
