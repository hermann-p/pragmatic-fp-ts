// Removes a key from an object or element from an array

const dissocArray = (idx: number, array: any[]) => [
  ...array.slice(0, idx),
  ...array.slice(idx + 1),
];

const dissocObject = (propNAme: string, obj: { [key: string]: any }) => {
  const result = {} as { [key: string]: any };
  Object.keys(obj).forEach((k) => {
    if (k !== propNAme) result[k] = obj[k];
  });
  return result as any;
};

export function dissoc<A extends {}, K extends keyof A>(propName: K, dict: A): Omit<A, K>;
export function dissoc<K extends string>(propName: K): <A extends {}>(dict: A) => Omit<A, K>;

export function dissoc<A>(idx: number, coll: A[]): A[];
export function dissoc(idx: number): <A>(coll: A[]) => A[];

export function dissoc(propName: number | string, dict?: any) {
  if (arguments.length === 1) {
    return (theDict: any) => dissoc(propName, theDict);
  }

  return dict instanceof Array
    ? dissocArray(propName as number, dict)
    : dissocObject(propName as string, dict || {});
}
