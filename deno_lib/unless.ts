import { Endomorphism, getValue, Predicate } from "./main.ts";

export function unless<A>(
  condition: Predicate<A>,
  ifPath: Endomorphism<A>,
  value: A
): A;
export function unless<A>(
  condition: Predicate<A>,
  ifPath: Endomorphism<A>
): (value: A) => A;
export function unless<A>(
  condition: Predicate<A>
): (ifPath: Endomorphism<A>) => (value: A) => A;

export function unless<A>(
  condition: Predicate<A>,
  ifPath?: Endomorphism<A>,
  value?: A
) {
  if (arguments.length === 1) {
    return function (_if: Endomorphism<A>, _val?: A) {
      return arguments.length === 1
        ? unless(condition, _if)
        : unless(condition, _if, _val!);
    };
  } else if (arguments.length === 2) {
    return (val: A) => unless(condition, ifPath!, val);
  }

  const val = getValue(value);
  return condition(val) ? val : ifPath!(val);
}
