export const isPrimitive = (v: unknown) =>
  typeof v === "number" ||
  typeof v === "string" ||
  typeof v === "symbol" ||
  v === true ||
  v === false ||
  v === null ||
  v === undefined;
