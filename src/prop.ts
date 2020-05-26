import { get, getIn, Dictionary, LensPath } from "./main";

type Input = Dictionary | any[];
export function prop<A>(lens: LensPath, input: Input): A;
export function prop<A>(lens: LensPath): (input: Input) => A;

export function prop<A>(lens: LensPath, input?: Input) {
  if (arguments.length === 1) {
    return (i: Input) => prop(lens, i);
  }

  return lens instanceof Array
    ? getIn<A>(lens, input!)
    : get<A>(lens as string, input!);
}
