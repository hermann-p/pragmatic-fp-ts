import { Predicate } from "./main";
export declare function takeRightWhile<A>(pred: Predicate<A>, coll: A[]): A[];
export declare function takeRightWhile<A>(pred: Predicate<A>): (coll: A[]) => A[];
