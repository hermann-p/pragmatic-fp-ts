import { Dictionary, Endomorphism } from "./main";
declare type ObjKey = string | number;
export declare function updateIn<TInput extends Dictionary, A, B>(path: ObjKey[], fn: Endomorphism<A>, dict: TInput): TInput;
export declare function updateIn<A>(path: ObjKey[], fn: Endomorphism<A>): <TInput extends Dictionary>(dict: TInput) => TInput;
export declare function updateIn(path: ObjKey[]): <A>(fn: Endomorphism<A>) => <TInput extends Dictionary>(dict: TInput) => TInput;
export {};
