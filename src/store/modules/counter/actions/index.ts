import { Action } from "redux";

export const Actions = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
};

interface IncrementAction extends Action {
    type: typeof Actions.INCREMENT;
}

export const increment = (): IncrementAction => {
    return {
        type: Actions.INCREMENT
    };
};

interface DecrementAction extends Action {
    type: typeof Actions.INCREMENT;
}

export const decrement = (): DecrementAction => {
    return {
        type: Actions.DECREMENT
    };
};

export type CounterActions = IncrementAction | DecrementAction