import { Dictionary, getValueOr } from "./main";

// inverts key->value to value->[all keys with that value]

export function invert<A extends {}>(obj: A) {
  const dict = getValueOr({}, obj);
  return Object.keys(dict).reduce((accum: Dictionary<string[]>, key) => {
    const value = String((dict as Dictionary)[key]);
    accum[value] = accum[value] || [];
    accum[value].push(key);
    return accum;
  }, {});
}
