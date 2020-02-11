import { Predicate } from "./types";
declare type ReplacementFunction = (substring: string, ...args: any[]) => string;
export declare const replace: (pattern: string | RegExp) => (replacement: string | ReplacementFunction) => (value: string | import("./Maybe").Just<string> | import("./Maybe").Nothing<string>) => import("./Maybe").Maybe<string>;
export declare const test: (regex: RegExp) => Predicate<string>;
export declare const matches: (regex: RegExp) => Predicate<string>;
export declare const toUpper: (str: string | import("./Maybe").Just<string> | import("./Maybe").Nothing<string>) => import("./Maybe").Maybe<string>;
export declare const toLower: (str: string | import("./Maybe").Just<string> | import("./Maybe").Nothing<string>) => import("./Maybe").Maybe<string>;
export declare const split: (delimiter: string | import("./Maybe").Just<string> | import("./Maybe").Nothing<string>) => (stringToSplit: string | import("./Maybe").Just<string> | import("./Maybe").Nothing<string>) => import("./Maybe").Just<string[]> | import("./Maybe").Nothing<unknown>;
export {};
