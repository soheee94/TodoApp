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

const DELETE_TODO = "todos/DELETE_TODO";
const DELETE_TODO_SUCCESS = "todos/DELETE_TODO_SUCCESS";
const DELETE_TODO_ERROR = "todos/DELETE_TODO_ERROR";

const TOGGLE_TODO = "todos/TOGGLE_TODO";
const TOGGLE_TODO_SUCCESS = "todos/TOGGLE_TODO_SUCCESS";
const TOGGLE_TODO_ERROR = "todos/TOGGLE_TODO_ERROR";

// const MODIFY_TODO = "todos/MODIFY_TODO";

// 초기상태
const initialState = {
  loading: false,
  data: null,
  error: null
};

export const getTodos = () => ({ type: GET_TODOS });
export const postTodo = data => ({ type: POST_TODO, payload: data });
export const deleteTodo = id => ({ type: DELETE_TODO, payload: id });
export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id });

const getTodosSaga = createPromiseSaga(GET_TODOS, todosAPI.getTodos);
const postTodoSaga = createPromiseSaga(POST_TODO, todosAPI.postTodo);
const deleteTodoSaga = createPromiseSaga(DELETE_TODO, todosAPI.deleteTodo);
const toggleTodoSaga = createPromiseSaga(TOGGLE_TODO, todosAPI.toggleTodo);

export function* todosSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  yield takeLatest(POST_TODO, postTodoSaga);
  yield takeLatest(DELETE_TODO, deleteTodoSaga);
  yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
    case GET_TODOS_SUCCESS:
    case GET_TODOS_ERROR:
      return handleAsyncActions(GET_TODOS, true)(state, action);
    case POST_TODO:
    case POST_TODO_SUCCESS:
    case POST_TODO_ERROR:
      return handleAsyncActions(POST_TODO, true)(state, action);
    case DELETE_TODO:
    case DELETE_TODO_SUCCESS:
    case DELETE_TODO_ERROR:
      return handleAsyncActions(DELETE_TODO, true)(state, action);
    case TOGGLE_TODO:
    case TOGGLE_TODO_SUCCESS:
    case TOGGLE_TODO_ERROR:
      return handleAsyncActions(TOGGLE_TODO, true)(state, action);
    default:
      return state;
  }
}
