import React from "react";
import styled from "styled-components";
import palette from "../lib/palette";

function TodoPagination({ pageNumbers, onClick, currentPage }) {
  return (
    <PaginationBlock>
      {pageNumbers.map((number) => (
        <div
          key={number}
          id={number}
          onClick={onClick}
          className={currentPage === number ? "currentPage" : ""}
        >
          {number}
        </div>
      ))}
    </PaginationBlock>
  );
}

const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  & > div {
    margin-right: 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  .currentPage {
    color: ${palette.yellow};
  }
`;

export default TodoPagination;
