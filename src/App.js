import { useState, useEffect } from "react";
import { useDebounce } from "./hooks";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className="App">
      <input value={value} onChange={handleChange} />
    </div>
  );
}
