import React, { useEffect } from 'react';
import CourseLayout from '@layouts/CourseLayout';
import { LectureData } from 'src/redux/reducers/types';

type Props = {
  lectureData: LectureData;
};

const CoverImage = ({ lectureData }: Props) => {
  useEffect(() => {
    console.log('CoverImage', lectureData);
  }, [lectureData]);
  return (
    <CourseLayout>
      <div>커버 이미지</div>
    </CourseLayout>
  );
};

export default CoverImage;
