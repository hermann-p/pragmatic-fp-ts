import { Dictionary } from "./main";
export declare function whereEq<A = any>(pattern: Dictionary<A>, dict: Dictionary<A>): boolean;
export declare function whereEq<A = any>(pattern: Dictionary<A>): (dict: Dictionary<A>) => boolean;
