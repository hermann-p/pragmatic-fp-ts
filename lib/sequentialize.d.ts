export declare function sequentialize<A, B>(fn: (value: A) => Promise<B>, coll: A[]): Promise<B[]>;
export declare function sequentialize<A, B>(fn: (value: A) => Promise<B>): (coll: A[]) => Promise<B[]>;
