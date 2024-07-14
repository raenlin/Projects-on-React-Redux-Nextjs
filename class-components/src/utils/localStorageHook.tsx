import { useState } from 'react';

export const useSearchQuery = (key: string, initialValue: string) => {
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    const savedQuery = localStorage.getItem(key);
    return savedQuery !== null ? savedQuery : initialValue;
  });

  function setLocalStorageValue(newValue: string) {
    localStorage.setItem(key, newValue);
  }

  return [searchQuery, setSearchQuery, setLocalStorageValue] as const;
};
