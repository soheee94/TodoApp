import React from "react";
import { createGlobalStyle } from "styled-components";
import palette from "./palette";
import TodoSearch from "./components/TodoSearch";
import TodoContainer from "./containers/TodoContainer";
import TodoModalContainer from "./containers/TodoModalContainer";

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
      <TodoSearch />
      <TodoContainer />
      <TodoModalContainer />
    </>
  );
}

export default App;
