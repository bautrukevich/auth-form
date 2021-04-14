export interface Storable {
  asString(): string;
}

export interface SecureStorage<U, T> {
  getItem(key: U): Promise<T | null>;
  setItem(key: U, value: T): Promise<void>;
  removeItem(key: U): Promise<void>;
}
