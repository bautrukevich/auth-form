export interface Storable {
  asString(): string;
}

export interface SecureStorage<T> {
  getItem(key: string): Promise<T | null>;
  setItem(key: string, value: T): Promise<void>;
  removeItem(key: string): Promise<void>;
}
