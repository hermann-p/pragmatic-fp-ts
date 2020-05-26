import { Mappable, Predicate } from "./main";
export declare function ifElse<A, B>(condition: Predicate<A>, ifPath: Mappable<A, B>, elsePath: Mappable<A, B>, value: A): B;
export declare function ifElse<A, B>(condition: Predicate<A>, ifPath: Mappable<A, B>, elsePath: Mappable<A, B>): (value: A) => B;
export declare function ifElse<A, B>(condition: Predicate<A>, ifPath: Mappable<A, B>): (elsePath: Mappable<A, B>) => (value: A) => B;
export declare function ifElse<A, B>(condition: Predicate<A>): (ifPath: Mappable<A, B>) => (elsePath: Mappable<A, B>) => (value: A) => B;
