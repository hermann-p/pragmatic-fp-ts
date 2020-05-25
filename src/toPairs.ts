import { Dictionary, getValueOr } from "./main";

export function toPairs<A = any>(dict: Dictionary<A>): [string, A][] {
  const dd = getValueOr({}, dict);
  return Object.keys(dd).map((key) => [key, dd[key]]);
}
