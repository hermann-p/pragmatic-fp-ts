export declare function pick<V extends {}, K extends keyof V>(props: K[], dict: V): Pick<V, K>;
export declare function pick<V extends {}, K extends keyof V>(props: K[]): (dict: V) => Pick<V, K>;
