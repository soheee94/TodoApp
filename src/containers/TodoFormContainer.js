import React from "react";
import TodoForm from "../components/TodoForm";
import { useSelector, useDispatch } from "react-redux";
import { postTodo } from "../modules/todos";

function TodoFormContainer() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos.data);

  // 생성
  const onCreate = data => {
    dispatch(postTodo(data));
  };

  return <TodoForm todos={todos} onCreate={onCreate} />;
}

export default TodoFormContainer;
