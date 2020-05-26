export declare function assoc<A>(idx: number, value: A, coll: A[]): A[];
export declare function assoc<A>(idx: number, value: A): (coll: A[]) => A[];
export declare function assoc(idx: number): <A>(value: A) => (coll: A[]) => A[];
export declare function assoc<T extends {}, K extends string, V>(propName: K, value: V, dict: T): T & Record<K, V>;
export declare function assoc<K extends string, V>(propName: K, value: V): <T extends {}>(dict: T) => T & Record<K, V>;
export declare function assoc<K extends string>(propName: K): <V>(value: V) => <T extends {}>(dict: T) => T & Record<K, V>;
