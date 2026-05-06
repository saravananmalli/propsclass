import React, { useEffect, useRef } from 'react'

export default function InputFocus() {

  const textRef = useRef()
  const headingRef = useRef()

  useEffect(() => {

    // input focus
    textRef.current.focus()

    // h1 color change using useRef
    headingRef.current.style.color = "red"
    headingRef.current.style.backgroundColor = "yellow"

  }, [])

  return (
    <div>
      <h1 ref={headingRef}> useRef Example</h1>

      <input ref={textRef} type='text' placeholder='Enter text' />
    </div>
  )
}