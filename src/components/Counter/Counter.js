import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import { decrement, increment } from "../../store/reducers/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onDecrement = () => {
    dispatch(decrement());
  };

  const onIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>value {value}</h1>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  );
};

export default Counter;
