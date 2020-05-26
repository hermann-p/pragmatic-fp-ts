import { Predicate } from "./main";
export declare function both<A>(p1: Predicate<A>, p2: Predicate<A>, value: A): boolean;
export declare function both<A>(p1: Predicate<A>, p2: Predicate<A>): (value: A) => boolean;
export declare function both<A>(p1: Predicate<A>): (p2: Predicate<A>) => (value: A) => boolean;
