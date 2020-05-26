import { Endomorphism, Predicate } from "./main";
export declare function unless<A>(condition: Predicate<A>, ifPath: Endomorphism<A>, value: A): A;
export declare function unless<A>(condition: Predicate<A>, ifPath: Endomorphism<A>): (value: A) => A;
export declare function unless<A>(condition: Predicate<A>): (ifPath: Endomorphism<A>) => (value: A) => A;
