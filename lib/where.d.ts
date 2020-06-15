import { Predicate, Dictionary } from "./main";
export declare function where<A extends {}>(pattern: {
    [k in keyof A]?: Predicate<A[k]>;
}, dict: A): boolean;
export declare function where<P extends Dictionary<Predicate<any>>>(pattern: P): (dict: {
    [K in keyof typeof pattern]: Parameters<P[K]>[0];
}) => boolean;
