import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../modules/todos";
import TodoModal from "../components/TodoModal";
import TodoForm from "../components/TodoForm";
import { putTodo } from "../modules/todos";

function TodoModalContainer() {
  const modalOpen = useSelector((state) => state.todos.modalOpen);
  const todo = useSelector((state) => state.todos.todo);
  const todos = useSelector((state) => state.todos.todos.data);
  const dispatch = useDispatch();
  // Modal 닫기
  const onClose = () => {
    dispatch(closeModal());
  };

  // 참조하고 있는 투두의 내용 배열 반환(먼저 할 일)
  const getRefArray = () => {
    const refArray = [];
    todo.ref.forEach((refId) => {
      refArray.push(todos.find((c) => c.id === refId));
    });
    return refArray;
  };

  // 투두 수정
  const onCreate = (data) => {
    dispatch(putTodo(data));
    onClose();
  };

  return (
    <TodoModal onClose={onClose} open={modalOpen}>
      <TodoForm
        todo={todo}
        // todos에서 자기 자신 제외 (먼저 할 일 Select에 포함 X)
        todos={todos && todos.filter((element) => element.id !== todo.id)}
        refs={() => getRefArray()}
        onCreate={onCreate}
      />
    </TodoModal>
  );
}

export default TodoModalContainer;
