import { useRef, useState } from "react"
import PreviousState from "./previous"
import DomAccess from "./domaccessuseref"
import InputFocus from "./usereffocus"

export const Useref = () => {
    const [count, setcount] = useState(0)

    const data = useRef(0)

    const increment = () => {
        setcount(count + 1)
    }

    const handeler = () => {
        data.current++
        console.log(data.current)
    }

    console.log("increment working")

    return (
        <div>
            <h1>useref Home</h1>

            <p>Increment {count}</p>
            <button onClick={increment}>count+</button>

            <p>UserefCount {data.current}</p>
            <button onClick={handeler}>useref</button><br />
            <PreviousState /> <br />
            <DomAccess /> <br />
            <InputFocus />
        </div>
    )
}