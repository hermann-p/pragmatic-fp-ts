import { get, getIn, Dictionary, SelectorPath } from "./main.ts";

type Input = any[] | Dictionary;

export function getOr<A = any>(alt: A, path: SelectorPath, input: Input): A;
export function getOr<A = any>(alt: A, path: SelectorPath): (input: Input) => A;
export function getOr<A = any>(alt: A): (path: SelectorPath) => (input: Input) => A;

export function getOr<A = any>(alt: A, path?: SelectorPath, input?: Input) {
  if (arguments.length === 1) {
    return function (l: SelectorPath, i?: Input) {
      return arguments.length === 1 ? getOr(alt, l) : getOr(alt, l, i!);
    };
  } else if (arguments.length === 2) {
    return (i: Input) => getOr(alt, path!, i);
  }

  const i = input || {};
  const value = path instanceof Array ? getIn(path || [], i) : get((path || "") as any, i);

  return value || alt;
}
