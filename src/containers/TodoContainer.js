import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoTemplate from "../components/TodoTemplate";
import TodoList from "../components/TodoList";
import TodoAddForm from "../components/TodoAddForm";
import { getTodos, postTodo, deleteTodo } from "../modules/todos";
import TodoItem from "../components/TodoItem";

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

  const onDelete = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <TodoTemplate>
      <TodoList>
        {todos && todos.map(todo => <TodoItem todo={todo} key={todo.id} onDelete={onDelete} />)}
      </TodoList>
      <TodoAddForm todos={todos} onCreate={onCreate} />
    </TodoTemplate>
  );
}

export default TodoContainer;
