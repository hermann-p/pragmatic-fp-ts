import { Mappable } from "./main";
export declare function differenceWith<A, B>(toKey: Mappable<A, B>, setA: A[], setB: A[]): A[];
export declare function differenceWith<A, B>(toKey: Mappable<A, B>, setA: A[]): (setB: A[]) => A[];
export declare function differenceWith<A, B>(toKey: Mappable<A, B>): (setA: A[]) => (setB: A[]) => A[];
