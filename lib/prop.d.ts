import { Dictionary, SelectorPath } from "./main";
declare type Input = Dictionary | any[];
export declare function prop<A>(path: SelectorPath, input: Input): A;
export declare function prop<A>(path: SelectorPath): (input: Input) => A;
export {};
