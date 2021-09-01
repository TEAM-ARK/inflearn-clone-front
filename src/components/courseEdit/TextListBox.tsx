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

// type Prop = {
//   list?: string[];
//   setTextArray: React.Dispatch<React.SetStateAction<string[] | undefined>>;
// };
type Props = {
  item: string;
  onClick: () => void;
};

// const TextListBox = ({ list = [], setTextArray }: Prop) => {
//   const onClickDelete = (textList: string[], index: number) => {
//     textList.splice(index, 1);
//     setTextArray([...textList]);
//     console.log('after remove', textList);
//   };
const TextListBox = ({ item, onClick }: Props) => {
  return (
    <DynamicBox>
      <div>{item}</div>
      <div>
        <button onClick={onClick} type="button">
          <DeleteIcon />
        </button>
        <DraggableButton>
          <DragHandleIcon />
        </DraggableButton>
      </div>
    </DynamicBox>
  );
};

// TextListBox.defaultProps = { // eslint -> react/require-default-props : off
//   list: [],
// };

export default TextListBox;
