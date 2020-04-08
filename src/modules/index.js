import { combineReducers } from "redux";
import todos, { todosSaga } from "./todos";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ todos });
export function* rootSaga() {
  yield all([todosSaga()]);
}

export default rootReducer;
