import { Mappable } from "./main";
export declare function eitherOr<A, B>(f: Mappable<A, B>, g: Mappable<A, B>, value: A): B;
export declare function eitherOr<A, B>(f: Mappable<A, B>, g: Mappable<A, B>): (value: A) => B;
export declare function eitherOr<A, B>(f: Mappable<A, B>): (g: Mappable<A, B>) => (value: A) => B;
