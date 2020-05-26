import { Dictionary, Mappable } from "./main";
export declare function map<A, B>(fn: Mappable<A, B>, coll: A[]): B[];
export declare function map<A, B>(fn: Mappable<A, B>, coll: Dictionary<A>): Dictionary<B>;
export declare function map<A, B>(fn: Mappable<A, B>): <C extends A[] | Dictionary<A>>(coll: C) => C extends A[] ? B[] : Dictionary<B>;
