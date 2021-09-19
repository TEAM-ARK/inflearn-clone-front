import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { ItemInterface } from 'react-sortablejs';
import styled from 'styled-components';
// import { LectureInfoChild } from 'src/redux/reducers/types';

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
  item: ItemInterface;
  // onClickDelete: () => void;
  list: ItemInterface[];
  setList: React.Dispatch<React.SetStateAction<ItemInterface[]>>;
  index: number;
};

const TextListBox = ({ item, list, setList, index }: Props) => {
  const onClickDelete = () => {
    const copiedList = [...list];
    copiedList.splice(index, 1); // 현재 항목을 지움
    setList(copiedList); // 지운 것을 반영
  };

  return (
    <DynamicBox>
      <div>{item.name}</div>
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
