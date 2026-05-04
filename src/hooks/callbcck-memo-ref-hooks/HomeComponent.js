import React, { useCallback, useState } from 'react'
import ButtonComponent from './ButtonComponent'
import Heading from './headingComponent'
import InfoComponent from './InfoConponent'

export default function Home() {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(100)


    const increment1 = useCallback(() => {
        setCounter1(prev => prev + 1)
    }, [])

    const increment2 = useCallback(() => {
        setCounter2(prev => prev + 1)
    }, [])
    return (
        <>
            <Heading />
            <InfoComponent title="Counter1 :" value={counter1} />
            <ButtonComponent title="Increment 1" eventHandler={increment1} />
            <InfoComponent title="Counter2 :" value={counter2} />
            <ButtonComponent title="Increment 2" eventHandler={increment2} />
        </>
    )
}