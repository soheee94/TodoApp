import React from "react";
import styled from "styled-components";
import TodoHead from "./TodoHead";

function TodoList({ children }) {
  return (
    <TodoListBlock>
      <TodoHead />
      {children}
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  display: table;
  border-spacing: 0 15px;
`;

export default TodoList;
