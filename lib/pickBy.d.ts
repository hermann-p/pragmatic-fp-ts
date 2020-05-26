import { Dictionary, Predicate } from "./main";
export declare function pickBy<A = any>(pred: Predicate<A>, dict: Dictionary<A>): Dictionary<A>;
export declare function pickBy<A = any>(pred: Predicate<A>): (dict: Dictionary<A>) => Dictionary<A>;
