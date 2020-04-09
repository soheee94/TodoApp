import React from "react";
import styled from "styled-components";
import TodoHead from "./TodoHead";

function TodoListTemplate({ children }) {
  return (
    <TodoListBlock>
      <div>
        <TodoHead />
        {children}
      </div>
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  flex: 1;
  & > div {
    padding: 0 15px;
    display: table;
    border-spacing: 0 15px;
    width: 100%;
    box-sizing: border-box;
  }
`;

export default TodoListTemplate;
