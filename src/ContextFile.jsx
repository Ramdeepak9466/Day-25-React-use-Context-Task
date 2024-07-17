import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

//Created Context
const CounterContext = createContext();
const CounterProvider = ({ children }) => {
  //State to add and remove items
  const [count, setCount] = useState(1);
  //Onclick function to add item
  const addItem = (inStock) => {
    if (count >= inStock) {
      alert("Out of Stock");
    } else {
      setCount((prev) => prev + 1);
    }
  };
  //Onclick function to remove item
  const deleteItem = () => {
    if (count === 1) {
      alert("No Items to remove");
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
      <CounterContext.Provider value={{ count, addItem, deleteItem }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export { CounterProvider, CounterContext };
CounterProvider.propTypes = {
  children: PropTypes.object,
};
