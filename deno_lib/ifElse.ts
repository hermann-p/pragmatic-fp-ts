import { getValue, Mappable, Predicate } from "./main.ts";

export function ifElse<A, B>(
  condition: Predicate<A>,
  ifPath: Mappable<A, B>,
  elsePath: Mappable<A, B>,
  value: A
): B;

export function ifElse<A, B>(
  condition: Predicate<A>,
  ifPath: Mappable<A, B>,
  elsePath: Mappable<A, B>
): (value: A) => B;

export function ifElse<A, B>(
  condition: Predicate<A>,
  ifPath: Mappable<A, B>
): (elsePath: Mappable<A, B>) => (value: A) => B;

export function ifElse<A, B>(
  condition: Predicate<A>
): (ifPath: Mappable<A, B>) => (elsePath: Mappable<A, B>) => (value: A) => B;

export function ifElse<A, B>(
  condition: Predicate<A>,
  ifPath?: Mappable<A, B>,
  elsePath?: Mappable<A, B>,
  value?: A
) {
  if (arguments.length === 1) {
    return function (_if: Mappable<A, B>, _else?: Mappable<A, B>, _value?: A) {
      return arguments.length === 1
        ? ifElse(condition, _if)
        : arguments.length === 2
        ? ifElse(condition, _if, _else!)
        : ifElse(condition, _if, _else!, _value!);
    };
  } else if (arguments.length === 2) {
    return function (_else: Mappable<A, B>, _value?: A) {
      return arguments.length === 1
        ? ifElse(condition, ifPath!, _else)
        : ifElse(condition, ifPath!, _else, _value!);
    };
  } else if (arguments.length === 3) {
    return (_value: A) => ifElse(condition, ifPath!, elsePath!, _value);
  }

  const val = getValue(value);
  return condition(val) ? ifPath!(val) : elsePath!(val);
}
