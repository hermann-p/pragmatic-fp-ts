import { Endomorphism } from "./main";
export declare function update<TInput extends {}, K extends keyof TInput>(propName: K, fn: Endomorphism<TInput[K]>, dict: TInput): TInput;
export declare function update<K extends string, A = any>(propName: K, fn: Endomorphism<A>): <TInput extends Record<K, A>>(dict: TInput) => TInput;
export declare function update<K extends string>(propName: K): <A>(fn: Endomorphism<A>) => <TInput extends Record<K, A>>(dict: TInput) => TInput;
export declare function update<A>(index: number, fn: Endomorphism<A>, coll: A[]): A[];
export declare function update<A>(index: number, fn: Endomorphism<A>): (coll: A[]) => A[];
export declare function update(propName: number): <A>(fn: Endomorphism<A>) => (coll: A[]) => A[];
