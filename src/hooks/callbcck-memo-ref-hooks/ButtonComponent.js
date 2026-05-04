import { memo } from "react";



const ButtonComponent = ({ title, eventHandler }) => {

    console.log(`ButtonComponent rendering for ${title}`)

    return (
        <button onClick={eventHandler}>{title}</button>
    )

}

export default memo(ButtonComponent);