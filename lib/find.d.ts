import { Dictionary, Predicate } from "./main";
export declare function find<A>(condition: Predicate<A>, coll: A[]): A | null;
export declare function find<A>(condition: Predicate<A>, dict: Dictionary<A>): A | null;
export declare function find<A>(condition: Predicate<A>): <B extends A[] | Dictionary<A>>(coll: B) => (B extends A[] ? A : B extends Dictionary<A> ? A : never) | null;
