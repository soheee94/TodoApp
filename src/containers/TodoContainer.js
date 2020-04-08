import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoTemplate from "../components/TodoTemplate";
import TodoList from "../components/TodoList";
import TodoAddForm from "../components/TodoAddForm";
import { getTodos, postTodo } from "../modules/todos";

function TodoContainer() {
  const todos = useSelector(state => state.todos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const onCreate = data => {
    dispatch(postTodo(data));
    dispatch(getTodos());
  };

  return (
    <TodoTemplate>
      <TodoList todos={todos} />
      <TodoAddForm todos={todos} onCreate={onCreate} />
    </TodoTemplate>
  );
}

export default TodoContainer;
