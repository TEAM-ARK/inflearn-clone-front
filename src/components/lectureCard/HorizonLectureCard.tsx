import React, { useCallback } from 'react';
import styled from 'styled-components';
import IconButtons from '@components/lectureCard/IconButtons';
import LecturePrice from '@components/lectureCard/LecturePrice';
import RatingStar from '@components/lectureCard/RatingStar';
import { ILecture } from 'src/redux/reducers/types';

type HorizonLectureCardStyleProps = {
  index: number;
};

const HorizonLectureCardStyle = styled.li<HorizonLectureCardStyleProps>`
  display: flex;
  padding: 1.25rem;
  border-top: ${(props) => (props.index > 0 ? '1px solid hsla(0, 0%, 85.9%, 0.5);' : 'none')};

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const LectureCardContents = styled.div`
  display: flex;
  width: 100%;
`;

const LectureCardImage = styled.img`
  width: 8rem;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    width: 4rem;
  }
`;

const LectureTitle = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const HashTagsWrapper = styled.div`
  margin: 0.25rem 0;
  display: flex;
`;
type HashTagProps = {
  randomColor: string;
};

const HashTagStyle = styled.p.attrs<HashTagProps>((props) => ({
  style: {
    backgroundColor: props.randomColor,
  },
}))<HashTagProps>`
  display: inline-block;
  color: #454545;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0 6px;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 10px;
`;

const LectureShoppingContents = styled.div`
  margin-left: auto;
  text-align: right;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

const LecturePriceWrapper = styled.div`
  @media screen and (max-width: 768px) {
    & > * {
      display: block;
    }
  }
`;

const LectureCardIconBtnWrapper = styled.div`
  display: inline-block;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
  }
`;

const LectureCommentCount = styled.span`
  position: absolute;
  font-size: 0.7rem;
`;

type Props = {
  lecture: ILecture;
  index: number;
};

const HorizonLectureCard = ({ lecture, index }: Props) => {
  const { id, coverImage, title, rating, commentCount, price, hashTags, onDiscount } = lecture;

  const getRandomColor = useCallback(() => {
    const h = 360 * Math.random();
    const s = 25 + 70 * Math.random();
    const l = 85 + 10 * Math.random();

    return `hsl(${h} ,${s}%, ${l}%)`;
  }, []);

  return (
    <HorizonLectureCardStyle key={id} index={index}>
      <a id="thumbnail" href={`/course/${id}`}>
        <LectureCardImage loading="lazy" src={coverImage} alt={title} />
      </a>
      <LectureCardContents>
        <a id="lecture-info-contnents" href={`/course/${id}`}>
          <LectureTitle>{title}</LectureTitle>
          <HashTagsWrapper>
            {!!hashTags &&
              hashTags.map((val: string, idx: number) => (
                <HashTagStyle key={idx} randomColor={getRandomColor()}>
                  {val}
                </HashTagStyle>
              ))}
          </HashTagsWrapper>
          <div id="rating-star">
            <RatingStar rating={rating} size="1.5rem" responsive />
            <LectureCommentCount>({commentCount})</LectureCommentCount>
          </div>
        </a>
        <LectureShoppingContents>
          <LecturePriceWrapper>
            <LecturePrice price={price} discount={onDiscount} cardStyle="List" />
          </LecturePriceWrapper>
          <LectureCardIconBtnWrapper>
            <IconButtons view="List" />
          </LectureCardIconBtnWrapper>
        </LectureShoppingContents>
      </LectureCardContents>
    </HorizonLectureCardStyle>
  );
};

export default HorizonLectureCard;
