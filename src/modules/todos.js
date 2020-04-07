/* 액션 타입 선언 */
const ADD = "todos/ADD";
const DELETE = "todos/DELETE";
const TOGGLE = "todos/TOGGLE";
const MODIFY = "todos/MODIFY";

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
  type: ADD,
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
