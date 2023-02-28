import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} action="submit">
      <input
        type="text"
        placeholder="Escribir Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
