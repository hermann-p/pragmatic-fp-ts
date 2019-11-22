import { Monad } from "./Monad";
export declare const getMonadValue: <T>(input: T | Monad<T>, alternate?: T | undefined) => T;
