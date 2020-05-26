import { Mappable } from "./main";
export declare function applyTo<A, B>(value: A, fn: Mappable<A, B>): B;
export declare function applyTo<A, B>(value: A): (fn: Mappable<A, B>) => B;
