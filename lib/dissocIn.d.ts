declare type Lens = string[];
export declare function dissocIn<A extends {} | any[]>(path: Lens, dict: A): A;
export declare function dissocIn(path: Lens): <A extends {}>(dict: A) => A;
export {};
