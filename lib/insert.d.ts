export declare function insert<A>(position: number, value: A, coll: A[]): A[];
export declare function insert<A>(position: number, value: A): (coll: A[]) => A[];
export declare function insert<A>(position: number): <A>(value: A) => (coll: A[]) => A[];
