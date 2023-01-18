export function rest<T>(coll: T[]): T[] {
  return coll.slice(0, coll.length - 1);
}
