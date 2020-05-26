import { Predicate } from "./main";
export declare function dropRightWhile<A>(pred: Predicate<A>, coll: A[]): A[];
export declare function dropRightWhile<A>(pred: Predicate<A>): (coll: A[]) => A[];
