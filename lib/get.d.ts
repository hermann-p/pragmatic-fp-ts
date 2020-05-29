export declare function get<A>(idx: number, coll: A[]): A;
export declare function get<A>(idx: number): (coll: A[]) => A;
export declare function get<V extends {}, K extends keyof V>(propName: K, dict: V): V[K];
export declare function get<K extends string>(propName: K): <A extends any, V extends Record<K, A>>(dict: V) => V[K];
