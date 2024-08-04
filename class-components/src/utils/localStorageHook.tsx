import { useState } from 'react';

type LocalStorageValue = string | number | object | null;
type UseLocalStorage = [
  LocalStorageValue,
  (value: LocalStorageValue | ((prevState: LocalStorageValue) => LocalStorageValue)) => void,
];

const useLocalStorage = (key: string, initialValue: LocalStorageValue): UseLocalStorage => {
  const [state, setState] = useState<LocalStorageValue>(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (
    value: LocalStorageValue | ((prevState: LocalStorageValue) => LocalStorageValue)
  ) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
