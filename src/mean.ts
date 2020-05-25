import { chain, add, divideBy, count, reduce } from "./main";

export function mean(ns: number[]) {
  return chain(ns)
    .bind(reduce(add, 0))
    .bind(divideBy(count(ns)))
    .getValue();
}
