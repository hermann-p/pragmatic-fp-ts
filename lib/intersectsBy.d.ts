import { Mappable } from "./main";
export declare function intersectsBy<A, B>(getComp: Mappable<A, B>, setA: A[], setB: A[]): boolean;
export declare function intersectsBy<A, B>(getComp: Mappable<A, B>, setA: A[]): (setB: A[]) => boolean;
export declare function intersectsBy<A, B>(getComp: Mappable<A, B>): (setA: A[]) => (setB: A[]) => boolean;
