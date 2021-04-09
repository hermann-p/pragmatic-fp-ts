import { Dictionary, Mappable } from "./types";

type TMultiMethod<A, B> = A extends any[] ? (...args: A) => B : Mappable<A, B>;

// Implemented as interface + class only to have better TS types
export interface MultiMethod<ArgList extends any[], B> {
  (...args: ArgList): B;
}

export class MultiMethod<ArgList extends any[], B> extends Function {
  constructor(dispatch: TMultiMethod<ArgList, any>) {
    super();
    const methods: Dictionary<TMultiMethod<ArgList, B>> = {};

    const multi = function (...args: any[]): TMultiMethod<ArgList, B> {
      const dispatchKey = (dispatch as any)(...args);
      const method = methods[dispatchKey] || methods.default;
      if (!method) {
        throw new Error(`No method implementation for dispatch key ${dispatchKey}`);
      }
      return (method as any)(...args);
    };
    multi.defmethod = (dispatchKey: any, method: TMultiMethod<ArgList, B>) => {
      if (methods[dispatchKey]) {
        console.warn(`Overriding definition of ${dispatchKey}`);
      }
      methods[dispatchKey] = method;
    };
    return multi as any;
  }
}

export function defmulti<Input extends any | any[], Result>(dispatch: TMultiMethod<Input, any>) {
  return new MultiMethod<Input extends any[] ? Input : [Input], Result>(dispatch as any);
}

export function defmethod<M extends MultiMethod<any, any>>(
  multimethod: M,
  dispatchResult: any,
  impl: TMultiMethod<Parameters<M>, ReturnType<M>>
) {
  if (!(multimethod as any).defmethod) {
    throw new Error(`Can not extend given method: not a multi method`);
  }
  (multimethod as any).defmethod(dispatchResult, impl);
}
