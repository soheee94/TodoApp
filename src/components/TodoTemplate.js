import React from "react";
import styled from "styled-components";

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

const TodoTemplateBlock = styled.div`
  width: 700px;
  height: 512px;
  background: white;
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

export default TodoTemplate;
