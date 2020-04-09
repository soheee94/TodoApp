import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

function TodoModal({ open, onClose, children }) {
  return (
    <>
      {open && (
        <Background>
          <ModalBlock>
            <MdClose onClick={onClose} />
            {children}
          </ModalBlock>
        </Background>
      )}
    </>
  );
}

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBlock = styled.div`
  width: 500px;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  /* Close Svg */
  & > svg {
    align-self: flex-end;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default TodoModal;
