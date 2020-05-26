export declare function splitAt<A>(idx: number, coll: A[]): [A[], A[]];
export declare function splitAt(idx: number): <A extends any | string>(coll: A[] | A) => A extends string ? [string, string] : [A[], A[]];
export declare function splitAt(idx: number, text: string): [string, string];
export declare function splitAt(idx: number): (text: string) => [string, string];
