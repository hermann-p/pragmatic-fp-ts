import { Dictionary, Mappable } from "./main";
export declare function groupBy<A>(mkGroup: Mappable<A, string>, coll: A[]): Dictionary<A[]>;
export declare function groupBy<A>(mkGroup: Mappable<A, string>): (coll: A[]) => Dictionary<A[]>;
