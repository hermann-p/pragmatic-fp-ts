/*
 * A mutable value that behaves like a quantum particle: it can be formed until
 * the first time it's observed
 */

import { Endomorphism, Effect } from "./types.ts";

export const Mutable = <T>(clone: Endomorphism<T>) => (initialValue: T) => {
  let value = clone(initialValue);
  let wasRead = false;
  const preventRaces = () => {
    if (wasRead) {
      throw new Error("Can not alter mutable value after it was consumed");
    }
  };

  return {
    set: (newValue: T) => {
      preventRaces();
      value = newValue;
    },
    update: (fn: Endomorphism<T>) => {
      preventRaces();
      value = fn(value);
    },
    change: (fn: Effect<T>) => {
      preventRaces();
      fn(value);
    },
    value: () => {
      wasRead = true;
      return value;
    },
    toString: () => `Mutable ${JSON.stringify(value)}`,
  };
};

const cloneArray = <T extends any>(coll: T[]) => coll.concat();
export const MutableArray = <T>(coll: T[]) => Mutable(cloneArray)(coll);

const cloneObject = <T extends Record<string, any>>(obj: T) => ({ ...obj });
export const MutableObject = <T extends Record<string, any>>(obj: T) => Mutable(cloneObject)(obj);

const clonePrimitive = <T>(value: T) => value;
export const MutablePrimitive = <T>(value: T) => Mutable(clonePrimitive)(value);
