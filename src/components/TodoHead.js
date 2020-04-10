import React from "react";
import styled from "styled-components";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

function TodoHead({ onClick, order }) {
  const { done, text, createdDate, modifiedDate } = order;
  const DisplaySortIcon = ({ type }) => {
    if (type === null) return <FaSort />;
    if (type) return <FaSortDown />;
    return <FaSortUp />;
  };
  return (
    <TodoHeadBlock>
      <div onClick={() => onClick("done")}>
        상태 <DisplaySortIcon type={done} />
      </div>
      <div onClick={() => onClick("text")}>
        내용 <DisplaySortIcon type={text} />
      </div>
      <div onClick={() => onClick("createdDate")}>
        작성일 <DisplaySortIcon type={createdDate} />
      </div>
      <div onClick={() => onClick("modifiedDate")}>
        수정일 <DisplaySortIcon type={modifiedDate} />
      </div>
      <div></div>
    </TodoHeadBlock>
  );
}

const TodoHeadBlock = styled.div`
  display: table-header-group;
  font-size: 0.75rem;
  & > div {
    display: table-cell;
    cursor: pointer;
    &:nth-child(2) {
      width: 60%;
    }
    &:last-of-type {
      text-align: right;
    }
    &:hover {
      opacity: 0.8;
    }

    svg {
      vertical-align: middle;
    }
  }
`;

export default TodoHead;
