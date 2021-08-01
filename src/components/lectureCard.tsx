import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import RatingStar from 'src/components/ratingStar';

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

interface ILectureProps {
  id: string;
  coverImage: string;
  title: string;
  author: string;
  rating: number;
  commentCount: number;
  price: number;
  studentCount: number;
}

const LectureCard: FC<ILectureProps> = ({
  id,
  coverImage,
  title,
  author,
  rating,
  commentCount,
  price,
  studentCount,
}: ILectureProps) => {
  const studentCountFloor = Math.floor(studentCount / 100) * 100;

  return (
    <LectureCardStyle key={id}>
      <Link href={`/course/${id}`}>
        <LectureCardWrapper>
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
        </LectureCardWrapper>
      </Link>
    </LectureCardStyle>
  );
};

export default LectureCard;
