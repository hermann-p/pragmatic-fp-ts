export declare function whereEq<A extends {}>(pattern: {
    [K in keyof A]?: A[K];
}, dict: A): boolean;
export declare function whereEq<A extends {}>(pattern: A): <B extends A>(dict: B) => boolean;
