import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux-tool/counterSlice";

export const ViewCounterSlice = () => {
  const count = useSelector((state) => state.counter.value); // ✅ correct path
  const dispatch = useDispatch();

  return (
    <div>
      <h1>View Counter Slice</h1>

      <h1>{count}</h1> {/* ✅ SHOW VALUE */}

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};