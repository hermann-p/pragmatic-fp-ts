import { getValueOr } from "./main";

export function pick<V extends {}, K extends keyof V>(
  props: K[],
  dict: V
): Pick<V, K>;
export function pick<V extends {}, K extends keyof V>(
  props: K[]
): (dict: V) => Pick<V, K>;

export function pick<V extends {}, K extends keyof V>(props: K[], dict?: V) {
  if (arguments.length === 1) {
    return (_dict: V) => pick(props, _dict) as any;
  }

  const dd = getValueOr({} as any, dict);
  return getValueOr([], props).reduce((accum, key) => {
    accum[key] = dd[key];
    return accum;
  }, {} as any);
}
