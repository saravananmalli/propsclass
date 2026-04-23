// DisplayContex.js
import { useContext } from "react";
import ContexPass from "../hooks/createContex";

export const DisplayContex = () => {
  const { count, decrement12 } = useContext(ContexPass);

  return (
    <div>
      <h1>Display the Context Value: {count}</h1>
      <button onClick={decrement12}>Decrement</button>
    </div>
  );
};