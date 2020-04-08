import * as todosAPI from "../api/todos";
import { createPromiseSaga, handleAsyncActions } from "./asyncUtils";
import { takeEvery } from "redux-saga/effects";

/* 액션 타입 선언 */
const GET_TODOS = "todos/GET_TODOS";
const GET_TODOS_SUCCESS = "todos/GET_TODOS_SUCCESS";
const GET_TODOS_ERROR = "todos/GET_TODOS_SUCCESS";

// const ADD_TODO = "todos/ADD_TODO";
// const DELETE_TODO = "todos/DELETE_TODO";
// const TOGGLE_TODO = "todos/TOGGLE_TODO";
// const MODIFY_TODO = "todos/MODIFY_TODO";

// 초기상태
const initialState = {
  loading: false,
  data: null,
  error: null
};

export const getTodos = () => ({ type: GET_TODOS });

const getTodosSaga = createPromiseSaga(GET_TODOS, todosAPI.getTodos);

// export const addTodo = text => ({
//   type: ADD_TODO,
//   todo: {
//     id: 0,
//     text,
//     done: false,
//     createdDate: "",
//     modifiedDate: "",
//     ref: []
//   }
// });

export function* todosSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
    case GET_TODOS_SUCCESS:
    case GET_TODOS_ERROR:
      return handleAsyncActions(GET_TODOS, true)(state, action);
    default:
      return state;
  }
}
