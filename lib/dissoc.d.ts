export declare function dissoc<A extends {}, K extends keyof A>(propName: K, dict: A): Omit<A, K>;
export declare function dissoc<K extends string>(propName: K): <A extends {}>(dict: A) => Omit<A, K>;
