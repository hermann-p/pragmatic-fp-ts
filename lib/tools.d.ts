import { Monad } from "./Monad";
export declare const getMonadValue: <T>(input: T | Monad<T>, alternate?: T | undefined) => T;
export declare const toNumber: (value: unknown) => import("./Maybe").Maybe<number>;
export declare const toInteger: (value: unknown) => import("./Maybe").Maybe<number>;
export declare const toString: (value: unknown) => import("./Maybe").Maybe<string>;
export declare const tap: <T>(effect: (input: T) => unknown) => (value: T) => T;
export declare const spy: <T>(message?: string | undefined) => (value: T) => T;
