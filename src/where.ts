import { Predicate, Dictionary } from "./main";

export function where<A = any>(
  pattern: Dictionary<Predicate<A>>,
  dict: Dictionary<A>
): boolean;
export function where<A = any>(
  pattern: Dictionary<Predicate<A>>
): (dict: Dictionary<A>) => boolean;

export function where<A = any>(
  pattern: Dictionary<Predicate<A>>,
  dict?: Dictionary<A>
) {
  if (arguments.length === 1)
    return (_dict: Dictionary<A>) => where(pattern, _dict);

  return Object.keys(pattern!).reduce(
    (success, key) => success && pattern[key](dict![key]),
    true
  );
}
