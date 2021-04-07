import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  //1. when initializing our state, see if our data exists in localStorage.
  //2. If data exists on localStorage, make that our initialState value.
  //3. If data does not exist on localStorage, make our state = initialState and save initialState to localStorage.
  //4. When setting data, save data to state AND save data to localstorage/

  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
