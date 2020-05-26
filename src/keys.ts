import { Dictionary, getValueOr } from "./main";

export function keys(dict: Dictionary) {
  return Object.keys(getValueOr({}, dict));
}
