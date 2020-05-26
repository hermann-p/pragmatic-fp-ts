import { Dictionary, Foldable } from "./main";
export declare function reduce<A, B>(fold: Foldable<A, B>, startValue: B, coll: A[]): B;
export declare function reduce<A, B>(fold: Foldable<A, B>, startValue: B, dict: Dictionary<A>): B;
export declare function reduce<A, B>(fold: Foldable<A, B>, StartValue: B): (coll: A[]) => B;
export declare function reduce<A, B>(fold: Foldable<A, B>, StartValue: B): (dict: Dictionary<A>) => B;
export declare function reduce<A, B>(fold: Foldable<A, B>): (StartValue: B) => (coll: A[]) => B;
export declare function reduce<A, B>(fold: Foldable<A, B>): (StartValue: B) => (dict: Dictionary<A>) => B;
