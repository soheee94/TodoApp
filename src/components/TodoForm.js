import React, { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import palette from "../palette";
import { Multiselect } from "multiselect-react-dropdown";

function TodoForm({ todos, todo, refs, onCreate }) {
  const [value, setValue] = useState(todo ? todo.text : "");
  const [selectedList, setSelectedList] = useState(todo ? refs : []);
  const onSubmit = e => {
    // 새로고침 방지
    e.preventDefault();
    onCreate({
      id: todo && todo.id,
      text: value,
      ref: [...new Set(selectedList.map(selectedItem => selectedItem.id))]
    });
    setValue("");
    setSelectedList([]);
  };
  const onChangeSelect = selectedList => {
    setSelectedList(selectedList);
  };
  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <div style={{ marginRight: `15px`, flex: 1 }}>
          <Input
            placeholder="할 일을 입력하세요"
            autoFocus
            value={value}
            onChange={onChange}
            required
          ></Input>
          <Multiselect
            options={todos ? todos : []}
            displayValue="text"
            onSelect={onChangeSelect}
            onRemove={onChangeSelect}
            selectedValues={selectedList}
            placeholder="먼저 할 일"
            style={multiSelectStyle}
          />
        </div>
        <Button type="submit">
          <MdAdd />
        </Button>
      </Form>
    </>
  );
}

const multiSelectStyle = {
  searchBox: {
    border: `1px solid ${palette.lightgray}`,
    display: "flex",
    alignItems: "center",
    color: palette.gray,
    fontFamily: "inherit"
  },
  inputField: {
    margin: "5px"
  },
  chips: {
    background: palette.blue,
    marginBottom: 0
  },
  option: {
    fontSize: "0.875rem"
  }
};

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-top: 15px;
  border-top: 1px solid ${palette.lightgray};
`;

const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
  font-size: 0.875rem;
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

export default TodoForm;
