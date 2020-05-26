import { Dictionary, Predicate } from "./main";
export declare function findLast<A>(condition: Predicate<A>, coll: A[]): A | null;
export declare function findLast<A>(condition: Predicate<A>, dict: Dictionary<A>): A | null;
export declare function findLast<A>(condition: Predicate<A>): (coll: A[]) => A | null;
export declare function findLast<A>(condition: Predicate<A>): (dict: Dictionary<A>) => A | null;
