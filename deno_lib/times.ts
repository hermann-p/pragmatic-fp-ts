import { Mappable } from "./main.ts";

export function times<A>(repeats: number, fn: Mappable<number, A>): A[];
export function times(repeats: number): <A>(fn: Mappable<number, A>) => A[];

export function times<A>(repeats: number, fn?: Mappable<number, A>) {
  if (arguments.length === 1)
    return (f: Mappable<number, A>) => times(repeats, f);

  const result = Array(repeats);
  for (let i = 0; i < repeats; ++i) {
    result[i] = fn!(i);
  }
  return result;
}
