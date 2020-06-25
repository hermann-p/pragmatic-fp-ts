import { Dictionary, getValue, Mappable } from "./main";

export function mapKeys<A extends Dictionary = Dictionary, B extends Dictionary = Dictionary>(
  fn: Mappable<string, string>,
  dict: A
): B;

export function mapKeys<A extends Dictionary = Dictionary, B extends Dictionary = Dictionary>(
  fn: Mappable<string, string>
): (dict: A) => B;

export function mapKeys<A extends Dictionary = Dictionary, B extends Dictionary = Dictionary>(
  fn: Mappable<string, string>,
  dict?: A
) {
  if (arguments.length === 1) {
    return (_dict: A) => mapKeys(fn, _dict) as any;
  }

  const d: any = dict || {};
  return Object.keys(d || ({} as any)).reduce((accum: any, key: string) => {
    accum[getValue(fn(key))] = d[key];
    return accum;
  }, {} as any) as B;
}
