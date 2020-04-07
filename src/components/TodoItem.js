import React from "react";
import styled, { css } from "styled-components";
import { MdDone } from "react-icons/md";
import palette from "../palette";

function TodoItem({ done }) {
  return (
    <TodoItemBlock>
      <Checkbox done={done}>{done && <MdDone />}</Checkbox>
      <div>
        <Text done={done}>할일이에요</Text>
        <div>
          <RefTodoItem>@Todo1</RefTodoItem>
          <RefTodoItem>@Todo2</RefTodoItem>
        </div>
      </div>
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 15px;
  font-size: 0.875rem;
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1.2px solid #999;
  border-radius: 100%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 25px;
  ${props =>
    props.done &&
    css`
      background: ${palette.yellow};
      color: white;
      border: 1.2px solid ${palette.yellow};
    `}
`;

const Text = styled.div`
  color: ${palette.darkgray};
  font-weight: bold;
  display: flex;
  align-items: center;
  ${props =>
    props.done &&
    css`
      opacity: 0.5;
      text-decoration: line-through;
    `}
`;

const RefTodoItem = styled.span`
  color: ${palette.gray};
  display: inline-block;
  margin-right: 8px;
  font-size: 0.75rem;
`;

export default TodoItem;
