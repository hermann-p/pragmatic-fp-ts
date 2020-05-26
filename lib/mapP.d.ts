export declare function mapP<A, B>(fn: (value: A) => Promise<B>, coll: A[]): Promise<B[]>;
export declare function mapP<A, B>(fn: (value: A) => Promise<B>): (coll: A[]) => Promise<B[]>;
