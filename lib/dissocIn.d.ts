declare type Path = (string | number)[];
export declare function dissocIn<A extends {} | any[]>(path: Path, dict: A): A;
export declare function dissocIn(path: Path): <A extends {}>(dict: A) => A;
export {};
