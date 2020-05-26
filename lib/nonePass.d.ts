import { Predicate } from "./main";
export declare function nonePass<A>(preds: Predicate<A>[], value: A): boolean;
export declare function nonePass<A>(preds: Predicate<A>[]): (value: A) => boolean;
