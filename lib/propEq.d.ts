import { Dictionary } from "./main";
declare type Path = string | number | (string | number)[];
declare type Input = any[] | Dictionary;
export declare function propEq(path: Path, value: any, input: Input): boolean;
export declare function propEq(path: Path, value: any): (input: Input) => boolean;
export declare function propEq(path: Path): (value: any) => (input: Input) => boolean;
export {};
