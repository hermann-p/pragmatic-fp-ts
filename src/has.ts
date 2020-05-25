import { Dictionary, getValue, getValueOr } from "./main";

// test if an object has a property with given name, independent of its value

export function has(propName: string, dict: Dictionary): boolean;
export function has(propName: string): (dict: Dictionary) => boolean;

export function has(propName: string, dict?: Dictionary) {
  if (arguments.length === 1)
    return (theDict: Dictionary) => has(propName, theDict);
  else return Object.keys(getValueOr({}, dict)).includes(getValue(propName));
}
