import { Predicate } from "./main";
export declare function all<A>(pred: Predicate<A>, coll: A[]): boolean;
export declare function all<A>(pred: Predicate<A>): (coll: A[]) => boolean;
