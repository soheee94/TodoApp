import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../modules/todos";
import TodoModal from "../components/TodoModal";
import TodoForm from "../components/TodoForm";
import { putTodo } from "../modules/todos";

function TodoModalContainer() {
  const modalOpen = useSelector(state => state.todos.modalOpen);
  const todo = useSelector(state => state.todos.todo);
  const todos = useSelector(state => state.todos.todos.data);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };

  const getRefArray = () => {
    const refArray = [];
    todo.ref.forEach(refId => {
      refArray.push(todos.find(c => c.id === refId));
    });
    return refArray;
  };

  const onCreate = data => {
    dispatch(putTodo(data));
    onClose();
  };

  return (
    <TodoModal onClose={onClose} open={modalOpen}>
      <TodoForm todo={todo} todos={todos} refs={() => getRefArray()} onCreate={onCreate} />
    </TodoModal>
  );
}

export default TodoModalContainer;
