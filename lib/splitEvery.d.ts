export declare function splitEvery<A>(n: number, coll: A[]): A[][];
export declare function splitEvery<A>(n: number, text: string): string[];
export declare function splitEvery(n: number): <A>(input: A | A[]) => A extends string ? string[] : A[][];
