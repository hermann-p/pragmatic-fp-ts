import { Dictionary, getValueOr } from "./main";

export function values<T = any>(dict: Dictionary<T>) {
  return Object.values(getValueOr({}, dict));
}
