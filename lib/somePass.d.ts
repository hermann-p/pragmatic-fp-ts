import { Predicate } from "./main";
export declare function somePass<A>(preds: Predicate<A>[], value: A): boolean;
export declare function somePass<A>(preds: Predicate<A>[]): (value: A) => boolean;
