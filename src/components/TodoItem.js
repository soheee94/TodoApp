import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import palette from "../palette";

function TodoItem({ done }) {
  return (
    <TodoItemBlock>
      <Checkbox done={done}>{done && <MdDone />}</Checkbox>
      <TextBlock>
        <Text done={done}>할일이에요</Text>
        <div>
          <RefTodoItem>@Todo1</RefTodoItem>
          <RefTodoItem>@Todo2</RefTodoItem>
        </div>
      </TextBlock>
      <DateBlock>
        <p>2020-04-07</p>
        <p>2020-04-07</p>
      </DateBlock>
      <Delete>
        <MdDelete />
      </Delete>
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

const TextBlock = styled.div`
  flex: 1;
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
  display: inline-block;
  margin-right: 8px;
  font-size: 0.75rem;
`;

const DateBlock = styled.div`
  font-size: 0.75rem;
  display: flex;
  p {
    margin-right: 10px;
  }
`;

const Delete = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

export default TodoItem;
