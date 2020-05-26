import { Dictionary, Predicate } from "./main";
export declare function filter<A>(pred: Predicate<A>, coll: A[]): A[];
export declare function filter<A>(pred: Predicate<A>, coll: Dictionary<A>): Dictionary<A>;
export declare function filter<A>(pred: Predicate<A>): <B extends A[] | Dictionary<A>>(coll: B) => B extends A[] ? A[] : Dictionary<A>;
