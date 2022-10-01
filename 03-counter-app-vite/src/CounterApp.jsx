import { useState } from "react";
import PropTypes from "prop-types";

//FUNCTIONAL COMPONENT
export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (event) => setCounter(counter + 1);
  const handleSubstract = (event) => setCounter(counter - 1);
  const handleReset = (event) => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <p>{counter}</p>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

//PROPS
CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: "No hay valor",
};
