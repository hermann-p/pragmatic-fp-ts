import { Dictionary, Mappable } from "./main";
export declare function mapKeys<A extends Dictionary = Dictionary, B extends Dictionary = Dictionary>(fn: Mappable<string, string>, dict: A): B;
export declare function mapKeys<A extends Dictionary = Dictionary, B extends Dictionary = Dictionary>(fn: Mappable<string, string>): (dict: A) => B;
