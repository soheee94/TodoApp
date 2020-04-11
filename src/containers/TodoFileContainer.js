import React from "react";
import TodoFileButton from "../components/TodoFileButton";
import styled from "styled-components";
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

  const buildFileSelector = () => {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.onchange = onChangeFile;
    fileSelector.accept = "application/JSON";
    return fileSelector;
  };

  const onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];

    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(file);
  };

  function onReaderLoad(event) {
    var loadTodos = JSON.parse(event.target.result);
    dispatch(fileUpload(loadTodos));
  }

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
