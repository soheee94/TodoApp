import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoHead from "./TodoHead";

function TodoList({ todos }) {
  return (
    <TodoListBlock>
      <TodoHead />
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  display: table;
  border-spacing: 0 15px;
`;

export default TodoList;
