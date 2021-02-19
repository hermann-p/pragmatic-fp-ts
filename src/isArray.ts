export function isArray<T = any>(candidate: unknown): candidate is Array<T> {
  return candidate instanceof Array;
}
