import { Dictionary } from "./main";
declare type Path = (string | number)[];
export declare function assocIn<A = any>(path: Path, value: any, coll: any[]): A[];
export declare function assocIn<A = any>(path: Path, value: any): (coll: any[]) => A[];
export declare function assocIn<A = any>(path: Path): (value: any) => (coll: any[] | Dictionary) => A[] | Dictionary;
export declare function assocIn<A extends Dictionary>(path: Path, value: any, dict: A): A;
export declare function assocIn<A extends Dictionary>(path: Path, value: any): (dict: A) => A;
export {};
