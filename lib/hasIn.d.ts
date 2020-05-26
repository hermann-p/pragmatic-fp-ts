import { Dictionary } from "./main";
declare type ObjKey = string | number;
export declare function hasIn(path: ObjKey[], dict: Dictionary): boolean;
export declare function hasIn(path: ObjKey[]): (dict: Dictionary) => boolean;
export {};
