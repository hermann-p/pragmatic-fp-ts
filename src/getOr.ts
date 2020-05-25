import { get, getIn, Dictionary } from "./main";

type Lens = number | string | (number | string)[];
type Input = any[] | Dictionary;

export function getOr<A = any>(alt: A, lens: Lens, input: Input): A;
export function getOr<A = any>(alt: A, lens: Lens): (input: Input) => A;
export function getOr<A = any>(alt: A): (lens: Lens) => (input: Input) => A;

export function getOr<A = any>(alt: A, lens?: Lens, input?: Input) {
  if (arguments.length === 1) {
    return function (l: Lens, i?: Input) {
      return arguments.length === 1 ? getOr(alt, l) : getOr(alt, l, i!);
    };
  } else if (arguments.length === 2) {
    return (i: Input) => getOr(alt, lens!, i);
  }

  const value =
    lens instanceof Array ? getIn(lens!, input!) : get(lens! as string, input!);

  return value || alt;
}
