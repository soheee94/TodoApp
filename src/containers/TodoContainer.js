import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoTemplate from "../components/TodoTemplate";
import TodoList from "../components/TodoList";
import TodoAddForm from "../components/TodoAddForm";
import { getTodos, postTodo, deleteTodo, toggleTodo } from "../modules/todos";
import TodoItem from "../components/TodoItem";

function TodoContainer() {
  const todos = useSelector(state => state.todos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // 참조값 조회
  const getRefText = ref => {
    const refText = [];
    ref.forEach(element => {
      const found = todos.find(todo => todo.id === element);
      refText.push(found);
    });
    return refText;
  };

  // 생성
  const onCreate = data => {
    dispatch(postTodo(data));
  };

  // 삭제
  const onDelete = id => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("삭제하시겠습니까?")) {
      dispatch(deleteTodo(id));
    }
  };

  // 상태 전환
  const onToggle = (id, ref) => {
    // ref 상태 먼저 확인
    const refStatusCheck = element => {
      const found = todos.find(todo => todo.id === element);
      return found.done;
    };
    ref.every(refStatusCheck) ? dispatch(toggleTodo(id)) : alert("먼저 할 일을 완료해주세요!");
  };

  // 수정

  return (
    <TodoTemplate>
      <TodoList>
        {todos &&
          todos.map(todo => (
            <TodoItem
              todo={todo}
              getRefText={getRefText}
              key={todo.id}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
      </TodoList>
      <TodoAddForm todos={todos} onCreate={onCreate} />
    </TodoTemplate>
  );
}

export default TodoContainer;
