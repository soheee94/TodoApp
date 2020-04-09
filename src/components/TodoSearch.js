import React from "react";
import styled from "styled-components";
import palette from "../palette";

function TodoSearch() {
  return <TodoSearchBlock placeholder="검색"></TodoSearchBlock>;
}

const TodoSearchBlock = styled.input`
  width: 100%;
  height: 50px;
  background: white;
  margin: 0 auto 15px auto;
  border-radius: 10px;
  outline: none;
  border: 1px solid ${palette.lightgray};
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
