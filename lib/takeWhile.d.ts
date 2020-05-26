import { Predicate } from "./main";
export declare function takeWhile<A>(pred: Predicate<A>, coll: A[]): A[];
export declare function takeWhile<A>(pred: Predicate<A>): (coll: A[]) => A[];
