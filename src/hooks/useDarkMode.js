import { useEffect } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);
  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};
