import { Foldable } from "./main";
export declare function scan<A, B>(fold: Foldable<A, B>, start: B, coll: A[]): B[];
export declare function scan<A, B>(fold: Foldable<A, B>, start: B): (coll: A[]) => B[];
export declare function scan<F extends Foldable<any, any>>(fold: F): <B = ReturnType<F>>(start: B) => (coll: Parameters<F>[0][]) => ReturnType<F>[];
