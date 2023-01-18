export function median(ns: number[]) {
  const l = ns.length;
  if (l === 0) {
    return NaN;
  }

  const sorted = ns.sort((a, b) => b - a);
  const m = l / 2;

  return l % 2 === 1 ? sorted[m | 0] : (sorted[m - 1] + sorted[m]) / 2;
}
