import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import palette from "../palette";

function TodoItem({ done }) {
  return (
    <TodoItemBlock>
      <div>
        <Checkbox done={done}>{done && <MdDone />}</Checkbox>
      </div>
      <div>
        <Text done={done}>할일이에요</Text>
        <div>
          <RefTodoItem>@Todo1</RefTodoItem>
          <RefTodoItem>@Todo2</RefTodoItem>
        </div>
      </div>
      <DateBlock>2020-04-07</DateBlock>
      <DateBlock>2020-04-07</DateBlock>
      <Delete>
        <MdDelete />
      </Delete>
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.div`
  display: table-row;
  font-size: 0.875rem;
  & > div {
    display: table-cell;
    vertical-align: middle;
  }
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1.2px solid ${palette.gray};
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
  ${props =>
    props.done &&
    css`
      opacity: 0.5;
      text-decoration: line-through;
    `}
`;

const RefTodoItem = styled.span`
  display: inline-block;
  margin-right: 8px;
  font-size: 0.75rem;
`;

const DateBlock = styled.div`
  font-size: 0.75rem;
`;

const Delete = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  opacity: 1;
  text-align: right;
  &:hover {
    opacity: 0.8;
  }
`;

export default TodoItem;
