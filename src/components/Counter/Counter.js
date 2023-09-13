import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector();

  const onDecrement = () => {};

  const onIncrement = () => {};

  return (
    <div>
      <h1>value {value}</h1>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  );
};
