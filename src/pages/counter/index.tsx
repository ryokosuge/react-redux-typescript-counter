import { connect } from "react-redux";
import { Counter } from "./Counter"
import { increment, decrement } from "../../store/modules/counter/actions";
import { RootState } from "../../store";
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => {
    return {
        count: state.counter.count
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}

export const CounterPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);