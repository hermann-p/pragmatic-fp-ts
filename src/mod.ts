export function mod(modulus: number, n: number): number;
export function mod(modulus: number): (n: number) => number;

// mod that really constrains n within the modulus of [0, n[
export function mod(modulus: number, n?: number) {
  if (arguments.length === 1) return (_n: number) => mod(modulus, _n);

  const jsMod = n! % modulus;
  return jsMod < 0 ? jsMod + modulus : Math.abs(jsMod); // catch -0
}
