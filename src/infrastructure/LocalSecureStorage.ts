import { SecureStorage, Storable } from "../application/SecureStorage";

export class LocalSecureStorage<UKey extends Storable, TValue extends Storable> implements SecureStorage<UKey, TValue> {
  private readonly _storage;
  private readonly _valueFactory;

  constructor(storage: Storage, valueFactory: (value: string) => TValue) {
    this._storage = storage;
    this._valueFactory = valueFactory;
  }

  getItem(key: UKey): Promise<TValue | null> {
    return new Promise<TValue | null>((resolve, reject) => {
      try {
        const data = this._storage.getItem(key.asString());

        if (data !== null) {
          const storable = this._valueFactory(data);

          resolve(storable);
        }

        resolve(null);
      } catch (e) {
        reject(e);
      }
    });
  }

  removeItem(key: UKey): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this._storage.removeItem(key.asString());
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  setItem(key: UKey, value: TValue): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this._storage.setItem(key.asString(), value.asString());
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
}
