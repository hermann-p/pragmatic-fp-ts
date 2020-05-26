export declare function eqProps<V extends {}, K extends keyof V>(propName: K, a: V, b: V): boolean;
export declare function eqProps<T extends {}, K extends keyof T>(propName: K, a: T): (b: T) => boolean;
export declare function eqProps<K extends string>(propName: K): <T extends {}>(a: T) => (b: T) => boolean;
