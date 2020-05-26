import { Mappable } from "./main";
export declare function unionBy<A, B>(cmp: Mappable<A, B>, a: A[], b: A[]): A[];
export declare function unionBy<A, B>(cmp: Mappable<A, B>, a: A[]): (b: A[]) => A[];
export declare function unionBy<A, B>(cmp: Mappable<A, B>): (a: A[]) => (b: A[]) => A[];
