import React from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoAddForm from "./components/TodoAddForm";
import TodoList from "./components/TodoList";
import palette from "./palette";

function App() {
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api");
      console.log(response.data);
    } catch (e) {}
  };

  fetchUsers();

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
        <TodoList />
        <TodoAddForm />
      </TodoTemplate>
    </>
  );
}

export default App;
