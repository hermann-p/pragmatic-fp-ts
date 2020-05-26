import { Predicate } from "./main";
export declare function filterKeys<B extends {}, A extends B>(pred: Predicate<string>, dict: A): B;
export declare function filterKeys(pred: Predicate<string>): <B extends {}, A extends B>(dict: A) => B;
