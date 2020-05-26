import { Endomorphism } from "./main";
export declare function adjust<A>(idx: number, fn: Endomorphism<A>, coll: A[]): A[];
export declare function adjust<A>(idx: number, fn: Endomorphism<A>): (coll: A[]) => A[];
export declare function adjust(idx: number): <A>(fn: Endomorphism<A>) => (coll: A[]) => A[];
