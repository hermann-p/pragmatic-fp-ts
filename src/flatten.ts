import { getValueOr } from "./main";

export function flatten<A = any>(coll: any[]): A[] {
  const flat: any[] = [];
  getValueOr([], coll).forEach((el) =>
    Array.isArray(el) ? el.forEach((x) => flat.push(x)) : flat.push(el)
  );
  return flat;
}
