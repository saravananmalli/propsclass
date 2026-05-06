

import React,{useState} from 'react'
import { useRef, useEffect } from 'react';

export default function PreviousState() {

    const [inputValue, setInputValue] = useState("");
    const prevRef = useRef("")

    useEffect(() => {
        prevRef.current = inputValue

    },[inputValue])

    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <h2>Current Value: {inputValue}</h2>

        <h2>Prev Value: {prevRef.current}</h2>
      </>
    );
}