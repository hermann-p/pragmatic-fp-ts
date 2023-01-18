import { getValue } from "./main.ts";

// Clamps a sortable value between [min, max]

type Sortable = string | number | Date;
export function clamp<A extends Sortable = number>(min: A, max: A, value: A): A;
export function clamp<A extends Sortable = number>(
  min: A,
  max: A
): <B = A extends number ? number : A extends string ? string : Date>(
  value: B
) => B;
export function clamp<A extends Sortable = number>(
  min: A
): <B = A extends number ? number : A extends string ? string : Date>(
  max: B
) => <C = A extends number ? number : A extends string ? string : Date>(
  value: C
) => C;

export function clamp<A extends Sortable = number>(min: A, max?: A, value?: A) {
  if (arguments.length === 1) {
    return function (_max: A, _value?: A) {
      if (arguments.length === 1) {
        return clamp(min, _max);
      } else {
        return clamp(min, _max, _value!);
      }
    };
  } else if (arguments.length === 2) {
    return (_value: A) => clamp(min, max!, _value);
  }

  const [val, minVal, maxVal] = [value, min, max].map(getValue);
  if (val === undefined || minVal === undefined || maxVal === undefined) {
    throw new Error(
      "clamp() retrieved undefined input" +
        JSON.stringify({ min: min, max, value })
    );
  }

  return val < minVal ? minVal : val > maxVal ? maxVal : val;
}
