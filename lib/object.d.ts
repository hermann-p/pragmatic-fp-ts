import { Dictionary, Endomorphism, Mappable, MaybeType, Predicate } from "./types";
import { Maybe } from "./Maybe";
declare type KeyType = string | number;
declare type PathType = KeyType[] | Maybe<KeyType[]>;
export declare const getIn: (path: PathType) => <T extends Dictionary, U>(container: MaybeType<T>) => Maybe<U>;
export declare const get: <T extends Dictionary, U>(prop: string | number) => (obj: MaybeType<T>) => Maybe<U>;
export declare const keys: <T extends Dictionary>(obj: MaybeType<T>) => Maybe<string[]>;
export declare const values: <T extends Dictionary>(obj: MaybeType<T>) => Maybe<unknown[]>;
export declare const mapKeys: <T extends Dictionary, U extends Dictionary>(fn: Endomorphism<string>) => (obj: MaybeType<T>) => Maybe<U>;
export declare const reduceKV: <T extends Dictionary, U>(reducer: (accum: U, key: string, value: any) => U) => (initialValue: U) => (dict: MaybeType<T>) => Maybe<U>;
export declare const pickBy: <T extends Dictionary, U extends Dictionary>(predicate: Predicate<string>) => (obj: MaybeType<T>) => Maybe<Dictionary>;
export declare const filterKeys: <T extends Dictionary, U extends Dictionary>(predicate: Predicate<string>) => (obj: MaybeType<T>) => Maybe<Dictionary>;
export declare const pick: <T extends Dictionary, U extends Dictionary>(keysToPick: MaybeType<(string | number)[]>) => (dict: MaybeType<T>) => Maybe<U>;
export declare const pickValuesBy: <T extends Dictionary, U extends Dictionary>(predicate: Predicate<any>) => (dict: T) => Maybe<U>;
export declare const mapValues: <T extends Dictionary, U extends Dictionary, A, B>(fn: Mappable<A, B>) => (obj: MaybeType<T>) => Maybe<U>;
export declare const mapFilterValues: <T extends Dictionary, U extends Dictionary, A, B>(fn: Mappable<A, B>) => (obj: MaybeType<T>) => Maybe<U>;
export declare function assoc<O extends Dictionary, T>(propName: KeyType): (value: MaybeType<T>) => (dict: MaybeType<O>) => Maybe<O>;
export declare function assoc<T>(key: number): (value: T) => (arr: MaybeType<T[]>) => Maybe<T[]>;
export declare const assocIn: <T extends Dictionary, U>(path: (string | number)[]) => (value: MaybeType<U>) => (target: MaybeType<T>) => Maybe<T>;
export declare const dissoc: <T extends Dictionary>(key: string | number) => (value: MaybeType<T>) => Maybe<T>;
export declare const update: <T extends Dictionary, A, B>(propName: string | number) => (fn: Mappable<A, B>) => (dict: MaybeType<T>) => Maybe<T>;
export declare const updateIn: <T extends Dictionary, A, B>(path: (string | number)[]) => (fn: Mappable<A, B>) => (dict: MaybeType<T>) => Maybe<T>;
export declare const fromPairs: <T extends Dictionary>(pairs: MaybeType<unknown[][]>) => Maybe<T>;
export declare const toPairs: <T extends Dictionary>(dict: T) => Maybe<any[][]>;
export {};
