import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodos,
  deleteTodo,
  toggleTodo,
  showModal,
  setTodo,
  sortTodosASC,
  sortTodosDESC,
} from "../modules/todos";
import TodoItem from "../components/TodoItem";
import TodoPagination from "../components/TodoPagination";
import TodoListTemplate from "../components/TodoListTemplate";
import TodoHead from "../components/TodoHead";

function TodoListContainer() {
  const { loading, data: todos, error } = useSelector((state) => state.todos.todos);
  const keyword = useSelector((state) => state.todos.keyword);
  const dispatch = useDispatch();

  // 투두리스트 가져오기
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // 참조하고 있는 투두의 내용 배열 반환
  const getRefText = (refs) => {
    const refText = [];
    refs.forEach((ref) => {
      const found = todos.find((todo) => todo.id === ref);
      refText.push(found);
    });
    return refText;
  };

  // 투두 삭제
  const onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("삭제하시겠습니까?")) {
      dispatch(deleteTodo(id));
    }
  };

  // 상태 전환 (완료 <-> 미완료)
  const onToggle = (id, ref) => {
    // 참조(ref)하고 있는 투두의 상태 먼저 확인
    const refStatusCheck = (element) => {
      const found = todos.find((todo) => todo.id === element);
      return found.done;
    };
    // 참조하고 있는 투두가 모두 완료 상태일 때, 삭제 진행
    ref.every(refStatusCheck) ? dispatch(toggleTodo(id)) : alert("먼저 할 일을 완료해주세요!");
  };

  // 수정 팝업 오픈
  const onModalOpen = (id) => {
    // 수정하고자 하는 투두의 정보
    const todo = todos.find((todo) => todo.id === id);
    dispatch(setTodo(todo));
    dispatch(showModal());
  };

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5; // 페이지당 보여줄 todo 갯수
  const indexOfLastTodo = currentPage * todosPerPage; // 현재 페이지의 마지막 인덱스
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage; // 현재 페이지의 첫번째 인덱스
  const pageNumbers = [];
  const onClickPage = (e) => {
    setCurrentPage(parseInt(e.target.id));
  };

  // 정렬
  // 정렬 기준들의 상태
  // null: 초기 상태, true: 오름차순, false: 내림차순
  const [sort, setSort] = useState({
    done: null,
    text: null,
    createdDate: null,
    modifiedDate: null,
  });
  const onClickSort = (type) => {
    // 클릭한 기준을 제외하고 초기상태로 변환 후 정렬 진행
    setSort({
      done: null,
      text: null,
      createdDate: null,
      modifiedDate: null,
      [type]: sort[type] === null ? true : !sort[type],
    });
    sort[type] ? dispatch(sortTodosASC(type)) : dispatch(sortTodosDESC(type));
  };

  if (loading && !todos) return <div>로딩중</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!todos) return <div>할 일이 없습니다.</div>;

  // 검색 keyword에 맞는 투두리스트
  // 상태(완료/미완료로 검색), 내용, 작성일, 수정일
  const todoList = todos.filter(
    (todo) =>
      todo.text.search(keyword) >= 0 ||
      todo.createdDate.search(keyword) >= 0 ||
      todo.modifiedDate.search(keyword) >= 0 ||
      (keyword === "미완료" && !todo.done) ||
      (keyword === "완료" && todo.done)
  );
  // 현재 페이지 인덱스에 맞는 투두리스트
  const currentTodos = todoList.slice(indexOfFirstTodo, indexOfLastTodo);
  // 페이지 수
  for (let i = 1; i <= Math.ceil(todoList.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <TodoListTemplate>
        <TodoHead onClick={onClickSort} sort={sort} />
        {currentTodos.map((todo) => (
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

export default TodoListContainer;
