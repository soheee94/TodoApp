import * as todosAPI from "../api/todos";
import { handleAsyncActions, createPromiseThunk } from "../lib/asyncUtils";

/* 액션 타입 선언 */

// 전체 투두리스트 조회
const GET_TODOS = "todos/GET_TODOS"; // 요청 시작
const GET_TODOS_SUCCESS = "todos/GET_TODOS_SUCCESS"; // 요청 성공
const GET_TODOS_ERROR = "todos/GET_TODOS_SUCCESS"; // 요청 실패

// 투두 생성
const POST_TODO = "todos/POST_TODO";
const POST_TODO_SUCCESS = "todos/POST_TODO_SUCCESS";
const POST_TODO_ERROR = "todos/POST_TODO_SUCCESS";

// 투두 삭제
const DELETE_TODO = "todos/DELETE_TODO";
const DELETE_TODO_SUCCESS = "todos/DELETE_TODO_SUCCESS";
const DELETE_TODO_ERROR = "todos/DELETE_TODO_ERROR";

// 투두 상태 전환
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const TOGGLE_TODO_SUCCESS = "todos/TOGGLE_TODO_SUCCESS";
const TOGGLE_TODO_ERROR = "todos/TOGGLE_TODO_ERROR";

// 투두 모달 열기/닫기
const SHOW_MODAL = "todos/SHOW_MODAL";
const CLOSE_MODAL = "todos/CLOSE_MODAL";

// 선택된 투두 설정
const SET_TODO = "todos/SET_TODO";

// 투두 수정
const PUT_TODO = "todos/PUT_TODO";
const PUT_TODO_SUCCESS = "todos/PUT_TODO_SUCCESS";
const PUT_TODO_ERROR = "todos/PUT_TODO_ERROR";

// 검색 키워드 변경
const CHANGE_SEARCH = "todos/CHANGE_SEARCH";

// 투두 정렬(오름차순/내림차순)
const SORT_TODOS_ASC = "todos/SORT_TODOS_ASC";
const SORT_TODOS_DESC = "todos/SORT_TODOS_DESC";

// 파일 업로드(복원)
const FILE_UPLOAD = "todos/FILE_UPLOAD";
const FILE_UPLOAD_SUCCESS = "todos/FILE_UPLOAD_SUCCESS";
const FILE_UPLOAD_ERROR = "todos/FILE_UPLOAD_ERROR";

// 파일 다운로드(백업)
const FILE_DOWNLOAD = "todos/FILE_DOWNLOAD";
const FILE_DOWNLOAD_SUCCESS = "todos/FILE_DOWNLOAD_SUCCESS";
const FILE_DOWNLOAD_ERROR = "todos/FILE_DOWNLOAD_ERROR";

/* 초기 상태 */
const initialState = {
  todos: {
    loading: false,
    data: null,
    error: null,
  },
  todo: {},
  keyword: "",
  modalOpen: false,
};

/* 액션 생성함수 선언 */
export const showModal = () => ({ type: SHOW_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const setTodo = (data) => ({ type: SET_TODO, payload: data });
export const changeSearch = (keyword) => ({ type: CHANGE_SEARCH, payload: keyword });
export const sortTodosASC = (type) => ({ type: SORT_TODOS_ASC, payload: type });
export const sortTodosDESC = (type) => ({ type: SORT_TODOS_DESC, payload: type });

export const getTodos = createPromiseThunk(GET_TODOS, todosAPI.getTodos);
export const postTodo = createPromiseThunk(POST_TODO, todosAPI.postTodo);
export const deleteTodo = createPromiseThunk(DELETE_TODO, todosAPI.deleteTodo);
export const toggleTodo = createPromiseThunk(TOGGLE_TODO, todosAPI.toggleTodo);
export const putTodo = createPromiseThunk(PUT_TODO, todosAPI.putTodo);
export const fileUpload = createPromiseThunk(FILE_UPLOAD, todosAPI.fileUpload);
export const fileDownload = createPromiseThunk(FILE_DOWNLOAD, todosAPI.fileDownload);

// 리듀서
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
    case PUT_TODO:
    case PUT_TODO_SUCCESS:
    case PUT_TODO_ERROR:
      return handleAsyncActions(PUT_TODO, true)(state, action);
    case SHOW_MODAL:
      return {
        ...state,
        modalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
      };
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case CHANGE_SEARCH:
      return {
        ...state,
        keyword: action.payload,
      };
    case SORT_TODOS_DESC:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: state.todos.data.sort(function (a, b) {
            if (b[action.payload] < a[action.payload]) {
              return -1;
            }
            if (b[action.payload] > a[action.payload]) {
              return 1;
            }
            // 이름이 같을 경우
            return 0;
          }),
        },
      };
    case SORT_TODOS_ASC:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: state.todos.data.sort(function (a, b) {
            if (b[action.payload] > a[action.payload]) {
              return -1;
            }
            if (b[action.payload] < a[action.payload]) {
              return 1;
            }
            // 이름이 같을 경우
            return 0;
          }),
        },
      };
    case FILE_UPLOAD:
    case FILE_UPLOAD_SUCCESS:
    case FILE_UPLOAD_ERROR:
      return handleAsyncActions(FILE_UPLOAD, true)(state, action);
    case FILE_DOWNLOAD:
    case FILE_DOWNLOAD_SUCCESS:
    case FILE_DOWNLOAD_ERROR:
      if (action.payload === "SUCCESS") {
        alert("저장이 완료 되었습니다.");
      }
      return state;

    default:
      return state;
  }
}
