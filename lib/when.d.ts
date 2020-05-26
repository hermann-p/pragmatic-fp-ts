import { Endomorphism, Predicate } from "./main";
export declare function when<A>(condition: Predicate<A>, ifPath: Endomorphism<A>, value: A): A;
export declare function when<A>(condition: Predicate<A>, ifPath: Endomorphism<A>): (value: A) => A;
export declare function when<A>(condition: Predicate<A>): (ifPath: Endomorphism<A>) => (value: A) => A;
