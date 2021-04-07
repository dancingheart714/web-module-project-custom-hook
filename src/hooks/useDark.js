import { useLocalStorage } from './useLocalStorage';

export const useDark = () => {
  const [dark, setDark] = useLocalStorage('darkMode');

  return [dark, setDark];
};
