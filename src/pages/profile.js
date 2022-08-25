import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counter";

export const ProfilePage = () => {
  const data = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      profile page
      <div>
        <h1>{data}</h1>

        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
};
