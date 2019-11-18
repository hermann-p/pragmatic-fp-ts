export const isNil = <T>(value: T): boolean => typeof value === undefined || value === null;

export const isFunction = (value: any) => typeof value === "function";

export const isNaN = (value: any): boolean => typeof value === "number" && isNaN(value);

export const isEmpty = <T>(coll: Array<T>): boolean => coll.length === 0;

export const isNotEmpty = <T>(coll: Array<T>): boolean => !isEmpty(coll);
