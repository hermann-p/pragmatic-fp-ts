import { equals } from "./main.ts";

export function whereEq<A extends {}>(pattern: { [K in keyof A]?: A[K] }, dict: A): boolean;
export function whereEq<A extends {}>(pattern: A): <B extends A>(dict: B) => boolean;

export function whereEq<A extends {}>(pattern: A, dict?: A) {
  if (arguments.length === 1) return (_dict: A) => whereEq(pattern, _dict);

  return Object.keys(pattern!).reduce(
    (success, key) => success && equals((pattern as any)[key], (dict! as any)[key]),
    true
  );
}
