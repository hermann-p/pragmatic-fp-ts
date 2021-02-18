import { Dictionary, Mappable } from "./types";

type TMultiMethod<A, B> = A extends any[] ? (...args: A) => B : Mappable<A, B>;

const MultiMethod = <A, B>(dispatch: TMultiMethod<A, any>) => {
  const instances: Dictionary<(...args: any) => B> = {};
  const implementation = function (...args: any) {
    const dispatchKey = (dispatch as any)(...args);
    const inst = instances[dispatchKey] || instances["default"];
    if (!inst)
      throw new Error(
        `No method implementation for ${typeof dispatchKey}, ${JSON.stringify(
          dispatchKey,
          null,
          2
        )}`
      );
    else return inst(...args);
  };
  (implementation as any).instances = instances;
  return (implementation as unknown) as TMultiMethod<A, B>;
};

export function defmulti<Input extends any | any[], Result>(
  dispatch: TMultiMethod<Input, any>
): Input extends any[] ? (...input: Input) => Result : (input: Input) => Result {
  return MultiMethod<Input, Result>(dispatch);
}

export function defmethod<M extends TMultiMethod<any, any>>(
  multimethod: TMultiMethod<Parameters<M>, any>,
  dispatchResult: any,
  impl: M
) {
  if ((multimethod as any).instances[dispatchResult]) {
    console.warn("Overloading multimethod for ${JSON.stringify(dispatchResult, null, 2)}");
  }
  (multimethod as any).instances[dispatchResult] = impl;
}
