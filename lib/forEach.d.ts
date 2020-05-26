import { Dictionary, Effect } from "./main";
export declare function forEach<A>(effect: Effect<A>, coll: A[]): A[];
export declare function forEach<A>(effect: Effect<A>, coll: Dictionary<A>): Dictionary<A>;
export declare function forEach<A>(effect: Effect<A>): <B extends A[] | Dictionary<A>>(coll: B) => B extends A[] ? A[] : Dictionary<A>;
