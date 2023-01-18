import {
  assoc,
  assocIn,
  Dictionary,
  Endomorphism,
  getIn,
  nth,
  prop,
} from "./main.ts";

type LensGetter<TData, TValue> = (data: TData) => TValue;
type LensSetter<TData, TValue> = (value: TValue, data: TData) => TData;

type Lens<TData, TValue> = {
  view: LensGetter<TData, TValue>;
  set: LensSetter<TData, TValue>;
};

export function lens<TData, TValue>(
  getter: LensGetter<TData, TValue>,
  setter: LensSetter<TData, TValue>
): Lens<TData, TValue> {
  return {
    view: getter,
    set: setter,
  };
}

export function view<TData, TValue>(
  lens: Lens<TData, TValue>,
  data: TData
): TValue;
export function view<TData, TValue>(
  lens: Lens<TData, TValue>
): (data: TData) => TValue;

export function view<TData, TValue>(lens: Lens<TData, TValue>, data?: TData) {
  if (arguments.length === 1) {
    return (data_: TData) => view(lens, data_);
  }

  return lens.view(data!);
}

export function set<TData, TValue>(
  lens: Lens<TData, TValue>,
  value: TValue,
  data: TData
): TData;
export function set<TData, TValue>(
  lens: Lens<TData, TValue>,
  value: TValue
): (data: TData) => TData;
export function set<TData, TValue>(
  lens: Lens<TData, TValue>
): (value: TValue) => (data: TData) => TData;

export function set<TData, TValue>(
  lens: Lens<TData, TValue>,
  value?: TValue,
  data?: TData
) {
  if (arguments.length === 1) {
    return function (value_: TValue, data_?: TData) {
      return arguments.length === 1
        ? set(lens, value_)
        : set(lens, value_, data_!);
    };
  } else if (arguments.length === 2) {
    return (data_: TData) => set(lens, value!, data_);
  }
  return lens.set(value!, data!);
}

export function over<TData, TValue>(
  lens: Lens<TData, TValue>,
  fn: Endomorphism<TValue>,
  data: TData
): TData;
export function over<TData, TValue>(
  lens: Lens<TData, TValue>,
  fn: Endomorphism<TValue>
): (data: TData) => TData;
export function over<TData, TValue>(
  lens: Lens<TData, TValue>
): (fn: Endomorphism<TValue>) => (data: TData) => TData;

export function over<TData, TValue>(
  lens: Lens<TData, TValue>,
  fn?: Endomorphism<TValue>,
  data?: TData
) {
  if (arguments.length === 1) {
    return function (fn_: Endomorphism<TValue>, data_?: TData) {
      return arguments.length === 1 ? over(lens, fn_) : over(lens, fn_, data_!);
    };
  } else if (arguments.length === 2) {
    return (data_: TData) => over(lens, fn!, data_);
  }
  return lens.set(fn!(lens.view(data!)), data!);
}

export function lensProp<TValue = any, TData extends {} = Dictionary>(
  propName: string
) {
  const getter = prop<TValue>(propName);
  const setter = assoc(propName) as any;
  return lens<TData, TValue>(getter, setter);
}

export function lensIndex<T = any>(idx: number) {
  const getter = nth(idx);
  const setter = assocIn([idx]) as any;
  return lens<T[], T>(getter, setter);
}

type LensPath = (string | number)[];
export function lensPath<TValue = any, TData = any>(path: LensPath) {
  const getter = getIn(path);
  const setter = assocIn(path) as any;
  return lens<TData, TValue>(getter, setter);
}
