import m from "mori";
import { chain, Dictionary, Endomorphism, getValueOr } from "./main";

type ObjKey = string | number;
export function updateIn<TInput extends Dictionary, A, B>(
  path: ObjKey[],
  fn: Endomorphism<A>,
  dict: TInput
): TInput;

export function updateIn<A>(
  path: ObjKey[],
  fn: Endomorphism<A>
): <TInput extends Dictionary>(dict: TInput) => TInput;

export function updateIn(
  path: ObjKey[]
): <A>(
  fn: Endomorphism<A>
) => <TInput extends Dictionary>(dict: TInput) => TInput;

export function updateIn<TInput extends Dictionary, A>(
  path: ObjKey[],
  fn?: Endomorphism<A>,
  dict?: TInput
) {
  if (arguments.length === 1) {
    return function (_fn: Endomorphism<A>, _dict?: TInput) {
      return arguments.length === 1
        ? updateIn(path, _fn)
        : updateIn(path, _fn, _dict!);
    };
  } else if (arguments.length === 2) {
    return (_dict: TInput) => updateIn(path, fn!, _dict);
  }

  const p = getValueOr([], path);
  const d = getValueOr({} as any, dict);
  return chain(d)
    .bind(m.toClj)
    .bind((dd) => m.updateIn(dd, p, fn))
    .bind(m.toJs)
    .getValueOr({});
}
