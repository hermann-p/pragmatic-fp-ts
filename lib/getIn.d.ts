import { Dictionary } from "./main";
declare type ObjKey = string | number;
export declare function getIn<A = any>(path: ObjKey[], coll: Dictionary | any[]): A;
export declare function getIn<A = any>(path: ObjKey[]): (coll: Dictionary | any[]) => A;
export {};
