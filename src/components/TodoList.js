import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem done />
      <TodoItem />
      <TodoItem />
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div``;

export default TodoList;
