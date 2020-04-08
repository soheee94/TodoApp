import React from "react";
import styled from "styled-components";

function TodoHead() {
  return (
    <TodoHeadBlock>
      <div>상태</div>
      <div>내용</div>
      <div>작성일</div>
      <div>수정일</div>
      <div></div>
    </TodoHeadBlock>
  );
}

const TodoHeadBlock = styled.div`
  display: table-row;
  font-size: 0.75rem;
  & > div {
    display: table-cell;
    &:nth-child(2) {
      width: 60%;
    }
    &:last-of-type {
      text-align: right;
    }
  }
`;

export default TodoHead;
