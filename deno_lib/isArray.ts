import { somePass } from "./somePass.ts";
import { isPrimitive } from "./isPrimitive.ts";

export function isArray<T = any>(candidate: unknown): candidate is Array<T> {
  return Array.isArray(candidate);
}

export function isSet<T = any>(candidate: unknown): candidate is Set<T> {
  return candidate instanceof Set;
}

export function isMap<K = any, V = any>(candidate: unknown): candidate is Map<K, V> {
  return candidate instanceof Map;
}

export function isObject(candidate: unknown) {
  return !isPrimitive(candidate);
}

export function isSeq<T>(candidate: T) {
  return somePass([isArray, isSet, isMap, isObject], candidate);
}
