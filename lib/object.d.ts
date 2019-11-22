import { Dictionary } from "./types.d";
import { Maybe } from "./Maybe";
declare type KeyType = string | number;
declare type PathType = KeyType[] | Maybe<KeyType[]>;
export declare const get: (path: PathType) => <T>(container: Dictionary | import("./Maybe").Just<Dictionary> | import("./Maybe").Nothing<Dictionary>) => Maybe<T>;
export {};
