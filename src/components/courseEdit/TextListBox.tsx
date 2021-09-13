import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import styled from 'styled-components';

const DynamicBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding: 10px 10px 10px 20px;
  border: 1px solid #cfcfcf;
  border-radius: 1px;
  max-width: 450px;
`;

const DraggableButton = styled.button`
  cursor: move;
`;

type Props = {
  item: string;
  onClickDelete: () => void;
};
const TextListBox = ({ item, onClickDelete }: Props) => {
  return (
    <DynamicBox>
      <div>{item}</div>
      <div>
        <button onClick={onClickDelete} type="button">
          <DeleteIcon />
        </button>
        <DraggableButton className="handle">
          <DragHandleIcon />
        </DraggableButton>
      </div>
    </DynamicBox>
  );
};

export default TextListBox;
