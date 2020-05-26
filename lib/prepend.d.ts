export declare function prepend<A>(el: A, coll: A[]): A[];
export declare function prepend(head: string, tail: string): string;
export declare function prepend<A>(el: A): <B = A extends string ? string : A[]>(coll: B) => B;
