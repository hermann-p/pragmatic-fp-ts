import { getValueOr } from "./main";

export function join(separator: string, coll: any[]): string;
export function join(separator: string): (coll: any[]) => string;

export function join(separator: string, coll?: any[]) {
  if (arguments.length === 1) {
    return (_coll: any[]) => join(separator, _coll);
  }

  const sep = getValueOr(",", separator);
  const c = getValueOr([], coll);

  return c.join(sep);
}
