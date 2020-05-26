import { Predicate } from "./main";
export declare function partition<A>(by: Predicate<A>, coll: A[]): {
    t: A[];
    f: A[];
};
export declare function partition<A>(by: Predicate<A>): (coll: A[]) => {
    t: A[];
    f: A[];
};
