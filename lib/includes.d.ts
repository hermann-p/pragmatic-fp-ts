export declare function includes(what: string, coll: string): boolean;
export declare function includes<A>(what: A, coll: A[]): boolean;
export declare function includes<A, B = A extends string ? string | string[] : A[]>(what: A): (coll: B) => boolean;
