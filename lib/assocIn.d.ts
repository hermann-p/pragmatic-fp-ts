import { Dictionary } from "./main";
declare type Path = (string | number)[];
export declare function assocIn<A extends Dictionary>(path: Path, value: any, dict: A): A;
export declare function assocIn<A extends Dictionary>(path: Path, value: any): (dict: A) => A;
export declare function assocIn<A extends Dictionary>(path: Path): (value: any) => (dict: A) => A;
export declare function assocIn<A extends any[]>(path: Path, value: any, coll: A): A;
export declare function assocIn<A extends any[]>(path: Path, value: any): (coll: A) => A;
export declare function assocIn<A extends any[]>(path: Path): (value: any) => (coll: A) => A;
export {};
