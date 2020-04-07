import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import palette from "../palette";

function TodoAddForm() {
  const onSubmit = e => {
    // 새로고침 방지
    e.preventDefault();
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder="할 일을 입력하세요" autoFocus></Input>
      <Button>
        <MdAdd />
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  margin-bottom: 15px;
  padding-top: 15px;
  position: absolute;
  bottom: 0;
  width: calc(100% - 30px);
  border-top: 1px solid ${palette.lightgray};
`;

const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
  color: ${palette.darkgray};
  font-family: inherit;
  &::placeholder {
    color: ${palette.gray};
  }
`;

const Button = styled.button`
  background: ${palette.blue};
  color: white;
  outline: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default TodoAddForm;
