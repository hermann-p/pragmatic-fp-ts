import { Dictionary, MaybeType, Predicate } from "./types";
export declare const isNil: Predicate<unknown>;
export declare const isFunction: Predicate<unknown>;
export declare const isString: Predicate<unknown>;
export declare const isArray: Predicate<unknown>;
export declare const isNumber: Predicate<unknown>;
export declare const isObject: Predicate<unknown>;
export declare const isEmpty: Predicate<Array<unknown> | Object | string>;
export declare const isNotEmpty: Predicate<Array<unknown> | Object | string>;
export declare const isJust: Predicate<unknown>;
export declare const isNothing: Predicate<unknown>;
export declare const isMaybe: Predicate<unknown>;
export declare const isRight: Predicate<unknown>;
export declare const isLeft: Predicate<unknown>;
export declare const isEither: Predicate<unknown>;
export declare const isMonad: Predicate<unknown>;
export declare const isSome: Predicate<unknown>;
declare type WhereTemplate<T extends Dictionary> = {
    [k in keyof T]: Predicate<any>;
};
export declare const where: <T extends Dictionary>(template: MaybeType<WhereTemplate<T>>) => <U extends T>(dict: MaybeType<U>) => boolean;
declare type WhereEqTemplate<T extends Dictionary> = {
    [k in keyof T]: unknown;
};
export declare const whereEq: <T extends Dictionary>(template: MaybeType<WhereEqTemplate<T>>) => <U extends Dictionary>(dict: MaybeType<U>) => boolean;
export {};
