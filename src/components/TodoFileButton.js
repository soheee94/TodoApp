import React from "react";
import styled from "styled-components";
import palette from "../palette";

function TodoFileButton({ onClick, text }) {
  return <FileButton onClick={onClick}>{text}</FileButton>;
}

const FileButton = styled.button`
  border: none;
  border-radius: 10px;
  outline: none;
  color: white;
  width: 3rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 1rem;
  background: ${palette.yellow};
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover {
    opacity: 0.8;
  }
`;

export default TodoFileButton;
