import { Predicate } from "./main";
export declare function splitWhen<A>(when: Predicate<A>, coll: A[]): [A[], A[]];
export declare function splitWhen<A>(when: Predicate<A>): (coll: A[]) => [A[], A[]];
