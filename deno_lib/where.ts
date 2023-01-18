import { Predicate, Dictionary } from "./main.ts";

export function where<A extends {}>(
  pattern: { [k in keyof A]?: Predicate<A[k]> },
  dict: A
): boolean;

export function where<P extends Dictionary<Predicate<any>>>(
  pattern: P
): (dict: { [K in keyof typeof pattern]: Parameters<P[K]>[0] }) => boolean;

export function where<A extends {}>(pattern: { [k in keyof A]?: Predicate<A[k]> }, dict?: A) {
  if (arguments.length === 1) return (_dict: A) => where(pattern, _dict);

  return Object.keys(pattern!).reduce(
    (success, key) => success && (pattern as any)[key]((dict! as any)[key]),
    true
  );
}
