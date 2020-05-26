export function min(numbers: number[]) {
  return numbers.reduce((a, b) => (a > b ? b : a));
}
