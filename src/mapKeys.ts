import { chain, Dictionary, getValue, Mappable } from "./main";

export function mapKeys<
  A extends Dictionary = Dictionary,
  B extends Dictionary = Dictionary
>(fn: Mappable<string, string>, dict: A): B;

export function mapKeys<
  A extends Dictionary = Dictionary,
  B extends Dictionary = Dictionary
>(fn: Mappable<string, string>): (dict: A) => B;

export function mapKeys<
  A extends Dictionary = Dictionary,
  B extends Dictionary = Dictionary
>(fn: Mappable<string, string>, dict?: A) {
  if (arguments.length === 1) {
    return (_dict: A) => mapKeys(fn, _dict) as any;
  }

  return chain(dict)
    .bind((d) => {
      const keys = Object.keys(d!);
      return keys.reduce((accum: B, key: string) => {
        (accum as any)[getValue(fn(key))] = d![key];
        return accum;
      }, {} as any);
    })
    .getValue();
}
