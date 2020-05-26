export declare function project<V extends {}, K extends keyof V>(keys: K[], coll: V[]): Pick<V, K>[];
export declare function project<V extends {}, K extends keyof V>(keys: K[]): (coll: V[]) => Pick<V, K>[];
