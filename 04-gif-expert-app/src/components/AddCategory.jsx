import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
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
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
