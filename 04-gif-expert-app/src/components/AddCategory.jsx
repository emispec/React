import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    // prevenir que se agreguen elementos con 1 o menos caracteres.
    if (newInputValue <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setInputValue(""); //cuando enviamos vuelve a limpiar el formulario
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Busar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
