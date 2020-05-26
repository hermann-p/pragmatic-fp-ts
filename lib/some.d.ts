import { Predicate } from "./main";
export declare function some<A>(pred: Predicate<A>, coll: A[]): boolean;
export declare function some<A>(pred: Predicate<A>): (coll: A[]) => boolean;
