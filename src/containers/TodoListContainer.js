import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, deleteTodo, toggleTodo, showModal, setTodo } from "../modules/todos";
import TodoItem from "../components/TodoItem";
import TodoPagination from "../components/TodoPagination";
import TodoListTemplate from "../components/TodoListTemplate";

function TodoContainer() {
  const { loading, data: todos, error } = useSelector(state => state.todos.todos);
  const keyword = useSelector(state => state.todos.keyword);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // 참조 TODO 의 내용을 포함한 배열 반환
  const getRefText = ref => {
    const refText = [];
    ref.forEach(element => {
      const found = todos.find(todo => todo.id === element);
      refText.push(found);
    });
    return refText;
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

  // 수정 팝업 오픈
  const onModalOpen = id => {
    const todo = todos.find(todo => todo.id === id);
    dispatch(setTodo(todo));
    dispatch(showModal());
  };

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5; // 페이지당 보여줄 todo 갯수
  const indexOfLastTodo = currentPage * todosPerPage; // 현재 페이지의 마지막 인덱스
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage; // 현재 페이지의 첫번째 인덱스
  const pageNumbers = [];
  const onClickPage = e => {
    setCurrentPage(parseInt(e.target.id));
  };

  if (loading && !todos) return <div>로딩중</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!todos) return <div>할 일이 없습니다.</div>;

  // 검색 후
  const todoList = todos.filter(
    todo =>
      todo.text.search(keyword) >= 0 ||
      todo.createdDate.search(keyword) >= 0 ||
      todo.modifiedDate.search(keyword) >= 0
  );
  const currentTodos = todoList.slice(indexOfFirstTodo, indexOfLastTodo);
  for (let i = 1; i <= Math.ceil(todoList.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <TodoListTemplate>
        {currentTodos.map(todo => (
          <TodoItem
            todo={todo}
            refs={getRefText(todo.ref)}
            key={todo.id}
            onDelete={onDelete}
            onToggle={onToggle}
            onModalOpen={onModalOpen}
          />
        ))}
      </TodoListTemplate>
      <TodoPagination pageNumbers={pageNumbers} onClick={onClickPage} currentPage={currentPage} />
    </>
  );
}

export default TodoContainer;
