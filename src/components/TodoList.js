import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoHead from "./TodoHead";

function TodoList() {
  return (
    <TodoListBlock>
      <TodoHead />
      <TodoItem done />
      <TodoItem />
      <TodoItem />
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  display: table;
  border-spacing: 0 15px;
`;

export default TodoList;
