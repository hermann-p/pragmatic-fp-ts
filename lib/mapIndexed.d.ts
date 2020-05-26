import { Dictionary } from "./main";
declare type ArrayMappable<A, B> = (value: A, idx: number) => B;
declare type DictMappable<A, B> = (value: A, key: string) => B;
export declare function mapIndexed<A, B>(fn: ArrayMappable<A, B>, coll: A[]): B[];
export declare function mapIndexed<A, B>(fn: ArrayMappable<A, B>): (coll: A[]) => B[];
export declare function mapIndexed<A, B>(fn: DictMappable<A, B>, coll: Dictionary<A>): Dictionary<B>;
export declare function mapIndexed<A, B>(fn: DictMappable<A, B>): (coll: Dictionary<A>) => Dictionary<B>;
export {};
