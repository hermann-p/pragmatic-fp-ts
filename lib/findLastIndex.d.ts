import { Dictionary, Predicate } from "./main";
export declare function findLastIndex<A>(condition: Predicate<A>, coll: A[]): number;
export declare function findLastIndex<A>(condition: Predicate<A>, coll: Dictionary<A>): string;
export declare function findLastIndex<A>(condition: Predicate<A>): <T extends A[] | Dictionary<A>>(coll: T) => T extends A[] ? number : string;
