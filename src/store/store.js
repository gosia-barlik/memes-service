import { createStore } from "redux";
import { memeReducer } from "./reducers/globalReducer";

const store = createStore(
  memeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
