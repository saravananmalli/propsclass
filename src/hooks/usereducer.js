import { useReducer } from "react";

const initialization = {
    count: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };

        case "decrement":
            return { ...state, count: state.count - 1 };

        default:
            return state;
    }
}

export const ReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialization);

    const increment = () => {
        dispatch({ type: "increment" });
    };

    const decrement = () => {
        dispatch({ type: "decrement" });
    };

    return (
        <div>
            <h1>Count: {state.count}</h1>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};