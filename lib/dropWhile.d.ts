import { Predicate } from "./main";
export declare function dropWhile<A>(pred: Predicate<A>, coll: A[]): A[];
export declare function dropWhile<A>(pred: Predicate<A>): (coll: A[]) => A[];
