import { equals, get, getIn, Dictionary } from "./main.ts";

type Path = string | number | (string | number)[];
type Input = any[] | Dictionary;

export function propEq(path: Path, value: any, input: Input): boolean;
export function propEq(path: Path, value: any): (input: Input) => boolean;
export function propEq(path: Path): (value: any) => (input: Input) => boolean;

export function propEq(path: Path, value?: any, input?: Input) {
  if (arguments.length === 1) {
    return function (_value: any, _input?: Input) {
      return arguments.length === 1
        ? propEq(path, _value)
        : propEq(path, _value, _input!);
    };
  } else if (arguments.length === 2) {
    return (_input: Input) => propEq(path, value!, _input);
  }

  const propValue =
    path instanceof Array
      ? getIn(path, input!)
      : get(path as string, input as any);

  return equals(propValue, value);
}
