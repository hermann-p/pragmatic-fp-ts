import { Comparator } from "./main";
export declare function sortBy<A>(compare: Comparator<A>, coll: A[]): A[];
export declare function sortBy<A>(compare: Comparator<A>): (coll: A[]) => A[];
