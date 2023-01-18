import { Endomorphism, getValue, Predicate } from "./main.ts";

export function when<A>(
  condition: Predicate<A>,
  ifPath: Endomorphism<A>,
  value: A
): A;
export function when<A>(
  condition: Predicate<A>,
  ifPath: Endomorphism<A>
): (value: A) => A;
export function when<A>(
  condition: Predicate<A>
): (ifPath: Endomorphism<A>) => (value: A) => A;

export function when<A>(
  condition: Predicate<A>,
  ifPath?: Endomorphism<A>,
  value?: A
) {
  if (arguments.length === 1) {
    return function (_if: Endomorphism<A>, _val?: A) {
      return arguments.length === 1
        ? when(condition, _if)
        : when(condition, _if, _val!);
    };
  } else if (arguments.length === 2) {
    return (val: A) => when(condition, ifPath!, val);
  }

  const val = getValue(value);
  return condition(val) ? ifPath!(val) : val;
}
