import * as todosAPI from "../api/todos";
import { createPromiseSaga, handleAsyncActions } from "./asyncUtils";
import { takeEvery, takeLatest } from "redux-saga/effects";

/* 액션 타입 선언 */
const GET_TODOS = "todos/GET_TODOS";
const GET_TODOS_SUCCESS = "todos/GET_TODOS_SUCCESS";
const GET_TODOS_ERROR = "todos/GET_TODOS_SUCCESS";

const POST_TODO = "todos/POST_TODO";
const POST_TODO_SUCCESS = "todos/POST_TODO_SUCCESS";
const POST_TODO_ERROR = "todos/POST_TODO_SUCCESS";

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
export const postTodo = data => ({ type: POST_TODO, payload: data });

const getTodosSaga = createPromiseSaga(GET_TODOS, todosAPI.getTodos);
const postTodoSaga = createPromiseSaga(POST_TODO, todosAPI.postTodo);

export function* todosSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  yield takeLatest(POST_TODO, postTodoSaga);
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
