import { useState, useEffect } from "react";

export const useDebounce = (inputValue, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(inputValue), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);
  return debouncedValue;
};
