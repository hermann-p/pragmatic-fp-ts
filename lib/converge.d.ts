import { Mappable } from "./main";
export declare function converge<A, B, C>(join: (vals: B[]) => C, fns: Mappable<A, B>[], value: A): C;
export declare function converge<A, B, C>(join: (vals: B[]) => C, fns: Mappable<A, B>[]): (value: A) => C;
export declare function converge<B, C>(join: (vals: B[]) => C): <A>(fns: Mappable<A, B>[]) => (value: A) => C;
