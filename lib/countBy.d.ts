import { Dictionary, Mappable } from "./main";
export declare function countBy<A = any>(toKey: Mappable<A, any>, dict: A[]): Dictionary<number>;
export declare function countBy<A = any>(toKey: Mappable<A, any>): (dict: A[]) => Dictionary<number>;
