// CounteContex.js
import { useState } from "react";
import ContexPass from "../hooks/createContex";
import { DisplayContex } from "./displyContex";

export const CounteContex = () => {
  const [count, setCount] = useState(0);

  const incremnt = () => {
    setCount(prev => prev + 1);
  };

  const decremennt = () => {
    setCount(prev => prev - 1);
  };

  return (
    <ContexPass.Provider value={{ count, decrement12: decremennt }}>
      <div>
        <h1>{count}</h1>
        <button onClick={incremnt}>+</button>

        <DisplayContex />
      </div>
    </ContexPass.Provider>
  );
};