import { MaybeType, Predicate } from "./types";
declare type ReplacementFunction = (substring: string, ...args: any[]) => string;
export declare const replace: (pattern: string | RegExp) => (replacement: string | ReplacementFunction) => (value: MaybeType<string>) => import("./Maybe").Maybe<string>;
export declare const test: (regex: RegExp) => Predicate<string>;
export declare const matches: (regex: RegExp) => Predicate<string>;
export declare const toUpper: (str: MaybeType<string>) => import("./Maybe").Maybe<string>;
export declare const toLower: (str: MaybeType<string>) => import("./Maybe").Maybe<string>;
export declare const split: (delimiter: MaybeType<string>) => (stringToSplit: MaybeType<string>) => import("./Maybe").Just<string[]> | import("./Maybe").Nothing<unknown>;
export {};
