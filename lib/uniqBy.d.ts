import { Mappable } from "./main";
export declare function uniqBy<A, B>(cmp: Mappable<A, B>, a: A[]): A[];
export declare function uniqBy<A, B>(cmp: Mappable<A, B>): (a: A[]) => A[];
