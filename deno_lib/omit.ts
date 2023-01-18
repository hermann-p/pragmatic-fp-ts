export function omit<V extends {}, K extends keyof V>(
  props: K[],
  dict: V
): Omit<V, K>;

export function omit<V extends {}, K extends keyof V>(
  props: K[]
): (dict: V) => Omit<V, K>;

export function omit<V extends {}, K extends keyof V>(props: K[], dict?: V) {
  if (arguments.length === 1) return (_dict: V) => omit(props, _dict);

  const result: any = {};
  Object.keys(dict || {}).forEach((key) => {
    if (!props.includes(key as any)) {
      result[key] = (dict! as any)[key];
    }
  });

  return result;
}
