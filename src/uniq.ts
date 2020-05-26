export function uniq<A>(coll: A[]): A[] {
  return Array.from(new Set<A>(coll));
}
