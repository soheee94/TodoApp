import React from "react";
import { createGlobalStyle } from "styled-components";
import palette from "./lib/palette";
import TodoListContainer from "./containers/TodoListContainer";
import TodoModalContainer from "./containers/TodoModalContainer";
import TodoTemplate from "./components/TodoTemplate";
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoSearchContainer from "./containers/TodoSearchContainer";
import TodoFileContainer from "./containers/TodoFileContainer";

function App() {
  const GlobalStyle = createGlobalStyle`
    body{
      width: 100%;
      min-height : 100vh;
      overflow-y : auto;
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
      <TodoFileContainer />
      <TodoSearchContainer />
      <TodoTemplate>
        <TodoListContainer />
        <TodoFormContainer />
      </TodoTemplate>
      <TodoModalContainer />
    </>
  );
}

export default App;
