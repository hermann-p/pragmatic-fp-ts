import { Predicate } from "./main";
export declare function allPass<A>(preds: Predicate<A>[], value: A): boolean;
export declare function allPass<A>(preds: Predicate<A>[]): (value: A) => boolean;
