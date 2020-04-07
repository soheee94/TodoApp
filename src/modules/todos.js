/* 액션 타입 선언 */
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const MODIFY_TODO = "todos/MODIFY_TODO";

// 초기상태
const initialState = [
  {
    id: 1,
    text: "예시",
    done: false,
    createdDate: "2020-04-07",
    modifiedDate: "2020-04-07",
    ref: [1, 3]
  },
  {
    id: 2,
    text: "예시2",
    done: true,
    createdDate: "2020-05-07",
    modifiedDate: "2020-04-07",
    ref: []
  },
  {
    id: 3,
    text: "예시3",
    done: true,
    createdDate: "2020-05-07",
    modifiedDate: "2020-04-07",
    ref: [1, 2]
  }
];

export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: 0,
    text,
    done: false,
    createdDate: "",
    modifiedDate: "",
    ref: []
  }
});

export function* todoSaga() {}

export default function todo(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
