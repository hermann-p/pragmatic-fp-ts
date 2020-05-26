import { Dictionary, get, getIn, Predicate } from "./main";

type Path = string | number | (string | number)[];
type Input = any[] | Dictionary;

export function propSatisfies(
  path: Path,
  pred: Predicate<any>,
  input: Input
): boolean;
export function propSatisfies(
  path: Path,
  pred: Predicate<any>
): (input: Input) => boolean;
export function propSatisfies(
  path: Path
): (pred: Predicate<any>) => (input: Input) => boolean;

export function propSatisfies(
  path: Path,
  pred?: Predicate<any>,
  input?: Input
) {
  if (arguments.length === 1) {
    return function (_pred: Predicate<any>, _input?: Input) {
      return arguments.length === 1
        ? propSatisfies(path, _pred)
        : propSatisfies(path, _pred, _input!);
    };
  } else if (arguments.length === 2) {
    return (_input: Input) => propSatisfies(path, pred!, _input);
  }

  const propValue =
    path instanceof Array
      ? getIn(path, input!)
      : get(path as string, input as any);

  try {
    return pred!(propValue);
  } catch {
    return false;
  }
}
