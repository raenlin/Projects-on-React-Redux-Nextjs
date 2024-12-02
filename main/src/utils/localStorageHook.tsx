import { useState } from 'react';

type LocalStorageValue = string;
type UseLocalStorage = [
  LocalStorageValue,
  (value: LocalStorageValue | ((prevState: LocalStorageValue) => LocalStorageValue)) => void,
];

const useLocalStorage = (key: string, initialValue: LocalStorageValue): UseLocalStorage => {
  const [state, setState] = useState<LocalStorageValue>(() => {
    try {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      const value = localStorage.getItem(key);
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
      localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
