import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootRuducer from "./reducers";

const initialState = {};

const middleswares = [thunk];

const store = createStore(
  rootRuducer,
  initialState,
  compose(
    applyMiddleware(...middleswares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
