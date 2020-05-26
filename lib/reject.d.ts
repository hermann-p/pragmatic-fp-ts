import { Dictionary, Predicate } from "./main";
export declare function reject<A>(pred: Predicate<A>, coll: A[]): A[];
export declare function reject<A>(pred: Predicate<A>, coll: Dictionary<A>): Dictionary<A>;
export declare function reject<A>(pred: Predicate<A>): (coll: A[]) => A[];
export declare function reject<A>(pred: Predicate<A>): (coll: Dictionary<A>) => Dictionary<A>;
