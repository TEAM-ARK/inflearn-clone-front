import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type StyleProps = {
  isSelected?: boolean;
};

const CourseCommonButtonStyle = styled.button<StyleProps>`
  height: 45px;
  border-radius: 3px;
  border: ${(props: StyleProps) => (props.isSelected ? 'border: 1px solid #1dc078' : '1px solid #dedede')};
  color: ${(props: StyleProps) => (props.isSelected ? '#fff' : '#333')};
  font-size: 1rem;
  padding: 5px 12px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  ${(props: StyleProps) => props.isSelected && 'font-weight: 800'};
  ${(props: StyleProps) => props.isSelected && 'background: #1dc078'};
`;

type Props = {
  id: string;
  text: string;
  selectedId: string;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
};

const CourseCommonButton = ({ id, text, selectedId, setSelectedId }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  function onClickButton() {
    setSelectedId(id);
  }

  useEffect(() => {
    if (id === selectedId) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedId]);

  return (
    <CourseCommonButtonStyle onClick={onClickButton} key={id} isSelected={isSelected}>
      {text}
    </CourseCommonButtonStyle>
  );
};

export default CourseCommonButton;
