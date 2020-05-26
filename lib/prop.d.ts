import { Dictionary, LensPath } from "./main";
declare type Input = Dictionary | any[];
export declare function prop<A>(lens: LensPath, input: Input): A;
export declare function prop<A>(lens: LensPath): (input: Input) => A;
export {};
