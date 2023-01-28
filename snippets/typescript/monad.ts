const ValueSymbol = Symbol("MonadValue");
const ErrorSymbol = Symbol("MonadError");

type MonadValue<T> = {
  type: typeof ValueSymbol;
  value: T;
};

type MonadError = {
  type: typeof ErrorSymbol;
  value: Error;
};

type MonadData<T> = MonadValue<T> | MonadError;

export class Monad<T> {
  constructor(private data: MonadData<T>) {}

  static start(): Monad<null> {
    return new Monad({ type: ValueSymbol, value: null });
  }

  static from<T>(value: T): Monad<T> {
    return new Monad<T>({ type: ValueSymbol, value });
  }

  static fromError<T>(error: Error): Monad<T> {
    return new Monad<T>({ type: ErrorSymbol, value: error });
  }

  then<U>(f: (value: T) => U): Monad<U> {
    if (this.data.type === ValueSymbol) {
      try {
        return Monad.from(f(this.data.value));
      } catch (e) {
        if (e instanceof Error) {
          return Monad.fromError(e);
        }
        throw e;
      }
    }
    return Monad.fromError(this.data.value);
  }

  catch(f: (error: Error) => void): Monad<T> {
    if (this.data.type === ErrorSymbol) {
      f(this.data.value);
    }
    return this;
  }

  get(): T {
    if (this.data.type === ValueSymbol) {
      return this.data.value;
    }
    throw this.data.value;
  }
}
