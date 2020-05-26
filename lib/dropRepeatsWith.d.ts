import { Equality } from "./main";
export declare function dropRepeatsWith<A>(isEqual: Equality<A>, coll: A[]): A[];
export declare function dropRepeatsWith<A>(isEqual: Equality<A>): (coll: A[]) => A[];
