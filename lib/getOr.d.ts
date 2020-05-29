import { Dictionary, SelectorPath } from "./main";
declare type Input = any[] | Dictionary;
export declare function getOr<A = any>(alt: A, path: SelectorPath, input: Input): A;
export declare function getOr<A = any>(alt: A, path: SelectorPath): (input: Input) => A;
export declare function getOr<A = any>(alt: A): (path: SelectorPath) => (input: Input) => A;
export {};
