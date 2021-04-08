import { SecureStorage, Storable } from "../application/SecureStorage";
import Cookies from "js-cookie";

export class CookiesSecureStorage<UKey extends Storable, TValue extends Storable>
  implements SecureStorage<UKey, TValue> {
  private readonly _valueFactory;

  constructor(valueFactory: (value: string) => TValue, defaults = {}) {
    this._valueFactory = valueFactory;
    Cookies.defaults = defaults;
  }

  getItem(key: UKey): Promise<TValue | null> {
    return new Promise<TValue | null>((resolve, reject) => {
      try {
        const data = Cookies.get(key.asString()) ?? null;

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
        Cookies.remove(key.asString());
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  setItem(key: UKey, value: TValue): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        Cookies.set(key.asString(), value.asString());
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
}
