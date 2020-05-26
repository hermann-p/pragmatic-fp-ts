import { Mappable } from "./main";
export declare function juxt<A, B>(fns: Mappable<A[], B>[], coll: A[]): B[];
export declare function juxt<A, B>(fns: Mappable<A[], B>[]): (coll: A[]) => B[];
