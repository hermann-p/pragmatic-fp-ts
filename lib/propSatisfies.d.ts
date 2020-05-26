import { Dictionary, Predicate } from "./main";
declare type Path = string | number | (string | number)[];
declare type Input = any[] | Dictionary;
export declare function propSatisfies(path: Path, pred: Predicate<any>, input: Input): boolean;
export declare function propSatisfies(path: Path, pred: Predicate<any>): (input: Input) => boolean;
export declare function propSatisfies(path: Path): (pred: Predicate<any>) => (input: Input) => boolean;
export {};
