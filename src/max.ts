export function max(numbers: number[]) {
  return numbers.reduce((a, b) => (a > b ? a : b));
}
