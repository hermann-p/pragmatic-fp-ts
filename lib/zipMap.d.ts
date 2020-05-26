import { Mappable } from "./main";
export declare function zipMap<A, B, C>(fn: Mappable<[A, B], C>, as: A[], bs: B[]): C[];
export declare function zipMap<A, B, C>(fn: Mappable<[A, B], C>, as: A[]): (bs: B[]) => C[];
export declare function zipMap<A, B, C>(fn: Mappable<[A, B], C>): (as: A[]) => (bs: B[]) => C[];
