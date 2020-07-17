import { Actions, CounterActions } from "../actions";

type CounterState = {
  count: number;
};

export function counterReducer(
  state: CounterState = { count: 0 }, action: CounterActions
): CounterState {
  switch (action.type) {
    case Actions.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case Actions.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    default:
      return state
  }
}