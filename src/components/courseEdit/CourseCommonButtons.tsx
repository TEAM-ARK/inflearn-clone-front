import React, { useState } from 'react';
import styled from 'styled-components';

type StyleProps = {
  isSelected?: boolean;
};

const CourseCommonButtonStyle = styled.button<StyleProps>`
  height: 45px;
  border-radius: 3px;
  border: ${(props: StyleProps) => (props.isSelected ? '1px solid #1dc078' : '1px solid #dedede')};
  color: ${(props: StyleProps) => (props.isSelected ? '#fff' : '#333')};
  font-size: 1rem;
  padding: 5px 12px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  ${(props: StyleProps) => props.isSelected && 'font-weight: 800'};
  ${(props: StyleProps) => props.isSelected && 'background: #1dc078'};
`;

export interface IHandleIdParams {
  id: string | number;
  kind: 'category' | 'level';
}

type Props = {
  kind: IHandleIdParams['kind'];
  handleId: (value: IHandleIdParams) => void;
  data: {
    id: string | number;
    name: string;
  }[];
};

const CourseCommonButtons = ({ kind, handleId, data }: Props) => {
  const [selectedId, setSelectedId] = useState<string | number>('');

  const onClickButton = (id: string | number) => {
    if (id === selectedId) {
      // true - 선택된 상태
      setSelectedId('');
      handleId({ id: '', kind });
    } else {
      // 선택된 상태가 아닌 경우
      setSelectedId(id);
      handleId({ id, kind });
    }
  };

  return (
    <>
      {
        // 카테고리 버튼 전부 수정해야 됨 - 다시 클릭 시 해제하도록 해야 함
        // 카테고리 리스트도 서버에서 가져와서 store에 저장 후 store에 있는 것을 가져오게 할 예정
        data.map((item) => (
          <CourseCommonButtonStyle
            onClick={() => onClickButton(item.id)}
            key={item.id}
            isSelected={item.id === selectedId}
          >
            {item.name}
          </CourseCommonButtonStyle>
        ))
      }
    </>
  );
};

export default CourseCommonButtons;
