import { useRef } from "react";

function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear by setting value to an empty string
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clearInput}>Clear Input</button>
    </div>
  );
}

export default MyComponent;
