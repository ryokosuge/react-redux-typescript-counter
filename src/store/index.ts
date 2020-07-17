import { createStore } from "redux";
import { createRootReducer } from "./reducer";

export function configureStore() {
  return createStore(
    createRootReducer()
  );
}

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;