import { Dictionary, getValueOr } from "./main.ts";

export function toPairs<A = any>(dict: Dictionary<A>): [string, A][] {
  const dd = getValueOr({}, dict);
  return Object.keys(dd).map((key) => [key, dd[key]]);
}
