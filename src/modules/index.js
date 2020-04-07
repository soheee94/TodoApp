import { combineReducers } from "redux";
import todos, { todoSaga } from "./todos";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ todos });
export function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootReducer;
