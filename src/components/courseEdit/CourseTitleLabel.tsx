import React from 'react';
import styled from 'styled-components';

const CourseTitleLabelStyle = styled.h4`
  font-size: 14px;
  color: #929292;
  font-weight: 800;
`;

type Prop = {
  title: string;
};

const CourseTitleLabel = ({ title }: Prop) => <CourseTitleLabelStyle>{title}</CourseTitleLabelStyle>;

export default CourseTitleLabel;
