import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoTemplate from "../components/TodoTemplate";
import TodoList from "../components/TodoList";
import TodoAddForm from "../components/TodoAddForm";

function TodoContainer() {
  const todos = useSelector(state => state.todos);
  return (
    <TodoTemplate>
      <TodoList todos={todos} />
      <TodoAddForm />
    </TodoTemplate>
  );
}

export default TodoContainer;
