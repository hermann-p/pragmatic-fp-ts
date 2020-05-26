export declare function isSome<A = any>(x?: A): x is NonNullable<Exclude<A, "" | {} | []>>;
