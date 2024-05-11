import { useState } from "react";
import "./Input.css";

type TProps = { onSubmit: (title: string) => void };

export const Input = ({ onSubmit }: TProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};
