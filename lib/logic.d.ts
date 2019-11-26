import { MaybeType, Predicate } from "./types";
export declare const somePass: <T>(predicates: Predicate<T>[]) => (value: MaybeType<T>) => boolean;
export declare const some: <T>(pred: Predicate<T>) => (coll: MaybeType<T[]>) => boolean;
export declare const allPass: <T>(predicates: Predicate<T>[]) => (value: T) => boolean;
export declare const every: <T>(pred: Predicate<T>) => (coll: MaybeType<T[]>) => true | import("./Maybe").Just<boolean> | import("./Maybe").Nothing<boolean>;
