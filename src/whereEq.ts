import { equals, Dictionary } from "./main";

export function whereEq<A = any>(
  pattern: Dictionary<A>,
  dict: Dictionary<A>
): boolean;
export function whereEq<A = any>(
  pattern: Dictionary<A>
): (dict: Dictionary<A>) => boolean;

export function whereEq<A = any>(pattern: Dictionary<A>, dict?: Dictionary<A>) {
  if (arguments.length === 1)
    return (_dict: Dictionary<A>) => whereEq(pattern, _dict);

  return Object.keys(pattern!).reduce(
    (success, key) => success && equals(pattern[key], dict![key]),
    true
  );
}
