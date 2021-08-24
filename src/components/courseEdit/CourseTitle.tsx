import React from 'react';
import styled from 'styled-components';

const CourseTitleStyle = styled.h2`
  font-size: 24px;
  color: #330;
  font-weight: 800;
  padding-bottom: 1rem;
`;

type Prop = {
  title: string;
};

const CourseTitle = ({ title }: Prop) => <CourseTitleStyle>{title}</CourseTitleStyle>;

export default CourseTitle;
