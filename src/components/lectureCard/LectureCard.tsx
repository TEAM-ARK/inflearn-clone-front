import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import RatingStar from '@components/lectureCard/RatingStar';
import { ILecture } from 'src/redux/reducers/types';
import LectureCardHover from './LectureCardHover';

const LectureCardStyle = styled.li`
  padding: 12px;
  width: 25%;
  height: 300px;

  @media screen and (min-width: 618px) and (max-width: 1079px) {
    width: calc(100% / 3);
  }
  @media screen and (max-width: 617px) {
    width: 50%;
  }
`;

const LectureCardWrapper = styled.div`
  height: 100%;
  background-color: white;
  cursor: pointer;
  position: relative;
`;

const LectureCardImage = styled.div`
  background: center/cover no-repeat;
  height: 40%;
`;

const LectureCardTitle = styled.h3`
  color: var(--color-dark-grey);
  @media screen and (max-width: 617px) {
    font-size: 0.9rem;
  }
`;

const LectureCardAuthor = styled.div`
  color: var(--color-light-grey);
  font-weight: 600;
  font-size: smaller;
  margin-top: 6px;
`;

const LectureCardRating = styled.div`
  padding-top: 6px;
`;

const LectureCardReviewCount = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  vertical-align: top;
  line-height: 1rem;
  color: var(--color-grey);
`;

const LectureCardPrice = styled.div`
  color: var(--color-blue);
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 5px;
`;

const LectureCardTag = styled.span`
  background-color: var(--color-light-pink);
  border-radius: 4px;
  padding: 2px 6px;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-grey);
`;

// 중간 다리 역할로 이게 필요하구나, Props 없이 ILecture로 받으려니 안받아짐
type Props = {
  lecture: ILecture;
};

const LectureCard = ({ lecture }: Props) => {
  const { id, coverImage, title, author, rating, commentCount, price, studentCount } = lecture;
  const studentCountFloor = Math.floor(studentCount / 100) * 100;
  const [isHover, setIsHover] = useState(false);

  return (
    <LectureCardStyle key={id}>
      <Link href={`/course/${id}`}>
        <LectureCardWrapper onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <LectureCardImage style={{ backgroundImage: `url(${coverImage})` }} />
          <div>
            <LectureCardTitle>{title}</LectureCardTitle>
            <LectureCardAuthor>{author}</LectureCardAuthor>
            <LectureCardRating>
              <RatingStar rating={rating} size="1rem" />
              <LectureCardReviewCount>{`(${commentCount})`}</LectureCardReviewCount>
            </LectureCardRating>
            <LectureCardPrice>
              &#8361;{price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </LectureCardPrice>
            <div>
              <LectureCardTag>{`+${studentCountFloor}명`}</LectureCardTag>
            </div>
          </div>
          {isHover && <LectureCardHover lecture={lecture} />}
          {/* <LectureCardHover lecture={lecture} /> */}
        </LectureCardWrapper>
      </Link>
    </LectureCardStyle>
  );
};

export default LectureCard;
