import { Mappable } from "./main";
export declare function flatMap<A, B>(mappable: Mappable<A, B | B[]>, coll: (A | A[])[]): B[];
export declare function flatMap<A, B>(mappable: Mappable<A, B | B[]>): (coll: (A | A[])[]) => B[];
