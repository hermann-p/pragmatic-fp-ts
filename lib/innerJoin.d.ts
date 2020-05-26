import { Dictionary } from "./main";
declare type MixedCmp<A, B> = (a: A, b: B) => boolean;
export declare function innerJoin<A extends Dictionary = Dictionary, B extends Dictionary = Dictionary>(match: MixedCmp<A, B>, as: A[], bs: B[]): (A & B)[];
export declare function innerJoin<A extends Dictionary = Dictionary, B extends Dictionary = Dictionary>(match: MixedCmp<A, B>, as: A[]): (bs: B[]) => (A & B)[];
export declare function innerJoin<A extends Dictionary = Dictionary, B extends Dictionary = Dictionary>(match: MixedCmp<A, B>): (as: A[]) => (bs: B[]) => (A & B)[];
export {};
