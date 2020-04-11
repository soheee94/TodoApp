import React from "react";
import styled from "styled-components";

function TodoListTemplate({ children }) {
  return (
    <TodoListBlock>
      <div>{children}</div>
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  flex: 1;
  & > div {
    display: table;
    border-spacing: 0 15px;
    width: 100%;
  }
`;

export default TodoListTemplate;
