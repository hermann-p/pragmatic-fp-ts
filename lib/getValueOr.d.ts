import { MonadType } from "./main";
export declare function getValueOr<T>(alt: T, candidate: MonadType<T> | undefined): T;
export declare function getValueOr<T>(alt: T): (candidate: MonadType<T> | undefined) => T;
