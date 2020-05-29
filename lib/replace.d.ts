import { Endomorphism } from "./main";
declare type Replace = string | RegExp;
declare type Replacer = string | Endomorphism<string>;
export declare function replace(what: Replace, by: Replacer, where: string): string;
export declare function replace(what: Replace, by: Replacer): (where: string) => string;
export declare function replace(what: Replace): (by: Replacer) => (where: string) => string;
export {};
