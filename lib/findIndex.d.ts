import { Dictionary, Predicate } from "./main";
export declare function findIndex<A>(condition: Predicate<A>, coll: A[]): number;
export declare function findIndex<A>(condition: Predicate<A>, coll: Dictionary<A>): string;
export declare function findIndex<A>(condition: Predicate<A>): <B extends A[] | Dictionary<A>>(coll: B) => B extends A[] ? A[] : Dictionary<A>;
