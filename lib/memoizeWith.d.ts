import { Mappable } from "./main";
export declare function memoizeWith<A, B, C = string>(toKey: Mappable<A, C>, fn: Mappable<A, B>): Mappable<A, B>;
export declare function memoizeWith<A, C = string>(toKey: Mappable<A, C>): <B>(fn: Mappable<A, B>) => Mappable<A, B>;
