export function InfiniteArray<A>(calcElem: (idx: number) => A): A[] {
  return new Proxy([], {
    get(_, key) {
      if (key === "length") return Number.POSITIVE_INFINITY;
      const idx = typeof key === "string" ? parseInt(key) : (key as number);
      return calcElem(idx);
    },
  });
}
