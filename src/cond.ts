import { getValue, Mappable, Predicate } from "./main";

// Implements pattern matching. Walks through the array by testing the
// predicates on the value. When the first predicate is truthy, take
// its mappable from the tuple and apply it to the value

type Condition<A, B> = [Predicate<A>, Mappable<A, B>];
export function cond<A, B>(conditions: Condition<A, B>[]): Mappable<A, B>;

export function cond<A, B>(conditions: Condition<A, B>[]) {
  return (value: A) => {
    const val = getValue(value);

    const fn = conditions.reduce(
      (
        alreadyFound: Mappable<A, B> | null,
        [test, mappable]: Condition<A, B>
      ) => {
        return alreadyFound || (test(val) ? mappable : null);
      },
      null
    );

    return fn && fn(val);
  };
}
