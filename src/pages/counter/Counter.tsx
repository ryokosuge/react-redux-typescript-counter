import React from "react"
import { increment, decrement } from "../../store/modules/counter/actions";

type Props = {
  count: number;
  increment: typeof increment;
  decrement: typeof decrement;
};

export const Counter: React.FunctionComponent<Props> = ({
  count,
  increment,
  decrement
}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
};