import { useState, type Dispatch, type SetStateAction } from 'react';

export function useLocalStorageState<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setLocalStorageState = (value: T | ((prev: T) => T)) => {
    setState(prev => {
      const newState =
        typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;

      localStorage.setItem(key, JSON.stringify(newState));

      return newState;
    });
  };

  return [state, setLocalStorageState];
}
