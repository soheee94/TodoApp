import React from "react";
import { createGlobalStyle } from "styled-components";
import palette from "./palette";
import TodoSearch from "./components/TodoSearch";
import TodoListContainer from "./containers/TodoListContainer";
import TodoModalContainer from "./containers/TodoModalContainer";
import TodoTemplate from "./components/TodoTemplate";
import TodoFormContainer from "./containers/TodoFormContainer";

function App() {
  const GlobalStyle = createGlobalStyle`
    body{
      width: 100%;
      height : 100vh;
      background : ${palette.lightgray};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${palette.gray};
    }
`;

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoListContainer />
        <TodoFormContainer />
      </TodoTemplate>
      <TodoModalContainer />
    </>
  );
}

export default App;
