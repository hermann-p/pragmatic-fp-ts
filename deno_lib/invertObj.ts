import { Dictionary, getValueOr } from "./main.ts";

// inverts key->value to value->key object

export function invertObj(obj: Dictionary): Dictionary<string> {
  const dict = getValueOr({}, obj);
  return Object.keys(dict).reduce((accum: Dictionary<string>, key) => {
    accum[String(dict[key])] = key;
    return accum;
  }, {});
}
