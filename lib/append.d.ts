export declare function append<A>(el: A, coll: A[]): A[];
export declare function append(tail: string, head: string): string;
export declare function append<A extends string | any>(tail: A): (head: A | A[]) => A extends string ? string : A[];
