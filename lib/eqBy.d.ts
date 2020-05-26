import { Mappable } from "./main";
export declare function eqBy<A, B>(toComparable: Mappable<A, B>, a: A, b: A): boolean;
export declare function eqBy<A, B>(toComparable: Mappable<A, B>, a: A): (b: A) => boolean;
export declare function eqBy<A, B>(toComparable: Mappable<A, B>): (a: A, b: A) => boolean;
export declare function eqBy<A, B>(toComparable: Mappable<A, B>): (a: A) => (b: A) => boolean;
