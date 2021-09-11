import React from 'react';
import styled from 'styled-components';

const FindPassword = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 9000;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 0px;
  top: 5px;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 80px;
  cursor: pointer;
  z-index: 9001;
`;

interface IProps {
  show: boolean;
  handleCloseModal: () => void;
}

export default function FindPasswordModal({ show, handleCloseModal }: IProps) {
  if (!show) {
    return null;
  }

  return (
    <section>
      <FindPassword />
      <CloseModalButton onClick={handleCloseModal}>&times;</CloseModalButton>
    </section>
  );
}
