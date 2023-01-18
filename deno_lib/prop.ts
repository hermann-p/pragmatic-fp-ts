import { get, getIn, Dictionary, SelectorPath } from "./main.ts";

type Input = Dictionary | any[];
export function prop<A>(path: SelectorPath, input: Input): A;
export function prop<A>(path: SelectorPath): (input: Input) => A;

export function prop<A>(path: SelectorPath, input?: Input) {
  if (arguments.length === 1) {
    return (i: Input) => prop(path, i);
  }

  const i = input || {};

  return path instanceof Array ? getIn<A>(path, i) : get<A>(path as any, i as any);
}
