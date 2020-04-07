import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoTemplate from "../components/TodoTemplate";
import TodoList from "../components/TodoList";
import TodoAddForm from "../components/TodoAddForm";

function TodoContainer() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = text => dispatch();

  return (
    <TodoTemplate>
      <TodoList todos={todos} />
      <TodoAddForm todos={todos} />
    </TodoTemplate>
  );
}

export default TodoContainer;
