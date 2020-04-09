import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoSearch from "../components/TodoSearch";
import { changeSearch } from "../modules/todos";

function TodoSearchContainer() {
  const keyword = useSelector(state => state.todos.keyword);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(changeSearch(e.target.value));
  };
  return <TodoSearch value={keyword} onChange={onChange} />;
}

export default TodoSearchContainer;
