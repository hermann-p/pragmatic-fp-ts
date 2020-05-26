export declare function insertAll<A>(position: number, values: A[], coll: A[]): A[];
export declare function insertAll<A>(position: number, values: A[]): (coll: A[]) => A[];
export declare function insertAll<A>(position: number): <A>(values: A[]) => (coll: A[]) => A[];
