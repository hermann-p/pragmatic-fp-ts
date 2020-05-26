import { Predicate, Dictionary } from "./main";
export declare function where<A = any>(pattern: Dictionary<Predicate<A>>, dict: Dictionary<A>): boolean;
export declare function where<A = any>(pattern: Dictionary<Predicate<A>>): (dict: Dictionary<A>) => boolean;
