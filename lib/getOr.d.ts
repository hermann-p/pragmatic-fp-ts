import { Dictionary } from "./main";
declare type Lens = number | string | (number | string)[];
declare type Input = any[] | Dictionary;
export declare function getOr<A = any>(alt: A, lens: Lens, input: Input): A;
export declare function getOr<A = any>(alt: A, lens: Lens): (input: Input) => A;
export declare function getOr<A = any>(alt: A): (lens: Lens) => (input: Input) => A;
export {};
