import { Dictionary } from "./main";
declare type FoldKV<A, B> = (accum: B, value: A, key: string) => B;
export declare function reduceKV<A, B>(fold: FoldKV<A, B>, start: B, dict: Dictionary<A>): B;
export declare function reduceKV<A, B>(fold: FoldKV<A, B>, start: B): (dict: Dictionary<A>) => B;
export declare function reduceKV<A, B>(fold: FoldKV<A, B>): (start: B) => (dict: Dictionary<A>) => B;
export {};
