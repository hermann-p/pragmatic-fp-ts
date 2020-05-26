import { Dictionary, Mappable } from "./main";
export declare function indexBy<A>(mkIndex: Mappable<A, string>, coll: A[]): Dictionary<A>;
export declare function indexBy<A>(mkIndex: Mappable<A, string>): (coll: A[]) => Dictionary<A>;
