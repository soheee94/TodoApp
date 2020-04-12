import React from "react";
import styled from "styled-components";
import TodoFileButton from "../components/TodoFileButton";
import { useDispatch } from "react-redux";
import { fileDownload, fileUpload } from "../modules/todos";

function TodoFileContainer() {
  const dispatch = useDispatch();

  // 파일 다운로드(백업)
  const onFileDownload = () => dispatch(fileDownload());

  // 파일 업로드(복원)
  const onFileUpload = () => {
    const fileSelector = buildFileSelector();
    fileSelector.click();
  };
  // input[type='file'] 생성
  const buildFileSelector = () => {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.onchange = onChangeFile;
    // json 파일만 허용
    fileSelector.accept = "application/JSON";
    return fileSelector;
  };
  // file 변경
  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(file);
  };
  // json 파일 읽기
  const onReaderLoad = (event) => {
    const loadTodos = JSON.parse(event.target.result);
    dispatch(fileUpload(loadTodos));
  };

  return (
    <TodoFileButtonsBlock>
      <TodoFileButton text="백업" onClick={onFileDownload} />
      <TodoFileButton text="복원" onClick={onFileUpload} />
    </TodoFileButtonsBlock>
  );
}

const TodoFileButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default TodoFileContainer;
