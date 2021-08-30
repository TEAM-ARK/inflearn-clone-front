import React from 'react';
import styled from 'styled-components';

const DynamicBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding: 10px 10px 10px 20px;
  border: 1px solid #cfcfcf;
  border-radius: 1px;
`;

type Prop = {
  list?: string[];
};

const TextListBox = ({ list = [] }: Prop) => {
  return (
    <ul>
      {list.map((item) => {
        return <DynamicBox>{item}</DynamicBox>;
      })}
    </ul>
  );
};

// TextListBox.defaultProps = { // eslint
//   list: [],
// };

export default TextListBox;
