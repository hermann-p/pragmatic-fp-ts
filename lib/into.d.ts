import { Dictionary } from "./main";
declare type ObjKey = string | number;
export declare function into<T>(target: Dictionary<T>, coll: [ObjKey, T][]): Dictionary<T>;
export declare function into<T>(target: Dictionary<T>): (coll: [ObjKey, T][]) => Dictionary<T>;
export declare function into<T>(target: T[], coll: T[]): T[];
export declare function into<T>(target: T[]): (coll: T[]) => T[];
export {};
