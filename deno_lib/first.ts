export function first<A>(coll: A[]): A | null;
export function first(text: string): string | null;

// find first letter of string or first element of list

export function first<A>(coll: string | A[]) {
  return (coll || [])[0] || null;
}
