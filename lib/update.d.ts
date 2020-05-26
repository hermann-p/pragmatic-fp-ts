import { Dictionary, Endomorphism } from "./main";
export declare function update<TInput extends Dictionary, A, B>(propName: string, fn: Endomorphism<A>, dict: TInput): TInput;
export declare function update<A>(propName: string, fn: Endomorphism<A>): <TInput extends Dictionary>(dict: TInput) => TInput;
export declare function update(propName: string): <A>(fn: Endomorphism<A>) => <TInput extends Dictionary>(dict: TInput) => TInput;
export declare function update<A>(index: number, fn: Endomorphism<A>, coll: A[]): A[];
export declare function update<A>(index: number, fn: Endomorphism<A>): (coll: A[]) => A[];
export declare function update(propName: number): <A>(fn: Endomorphism<A>) => (coll: A[]) => A[];
