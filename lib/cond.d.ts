import { Mappable, Predicate } from "./main";
declare type Condition<A, B> = [Predicate<A>, Mappable<A, B>];
export declare function cond<A, B>(conditions: Condition<A, B>[]): Mappable<A, B>;
export {};
