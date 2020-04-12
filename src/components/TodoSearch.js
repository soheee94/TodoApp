import React from "react";
import styled from "styled-components";
import palette from "../lib/palette";

function TodoSearch({ value, onChange }) {
  return <TodoSearchBlock placeholder="검색" value={value} onChange={onChange}></TodoSearchBlock>;
}

const TodoSearchBlock = styled.input`
  width: 700px;
  height: 50px;
  background: white;
  margin: 15px auto;
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 15px;
  font-size: 0.875rem;
  box-sizing: border-box;
  font-family: inherit;
  color: ${palette.darkgray};
  &::placeholder {
    color: ${palette.gray};
  }
`;

export default TodoSearch;
