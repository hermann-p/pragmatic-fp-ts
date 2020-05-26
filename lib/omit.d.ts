export declare function omit<V extends {}, K extends keyof V>(props: K[], dict: V): Omit<V, K>;
export declare function omit<V extends {}, K extends keyof V>(props: K[]): (dict: V) => Omit<V, K>;
