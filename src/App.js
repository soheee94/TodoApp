import React from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import palette from "./palette";
import TodoSearch from "./components/TodoSearch";
import TodoContainer from "./containers/TodoContainer";

function App() {
  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get("/api");
  //     console.log(response.data);
  //   } catch (e) {}
  // };

  // fetchUsers();

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
    </>
  );
}

export default App;
