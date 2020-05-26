import { Predicate } from "./main";
export declare function none<A>(pred: Predicate<A>, coll: A[]): boolean;
export declare function none<A>(pred: Predicate<A>): (coll: A[]) => boolean;
