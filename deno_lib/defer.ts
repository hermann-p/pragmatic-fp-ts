interface Deferred<T> extends Promise<T> {
  resolve: (value: T) => void;
  reject: (err: Error) => void;
}

const defer = <T>(): Deferred<T> => {
  let res: (value: unknown) => void = null as any;
  let rej: (err: Error) => void = null as any;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  (promise as any).resolve = res;
  (promise as any).reject = rej;

  return promise as Deferred<T>;
};
