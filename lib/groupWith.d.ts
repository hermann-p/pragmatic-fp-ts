import { Equality } from "./main";
export declare function groupWith<A>(isEqual: Equality<A>, coll: A[]): A[][];
export declare function groupWith<A>(isEqual: Equality<A>): (coll: A[]) => A[][];
