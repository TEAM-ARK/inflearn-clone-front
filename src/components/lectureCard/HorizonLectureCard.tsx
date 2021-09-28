import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import styled from 'styled-components';
import LecturePrice from '@components/lectureCard/LecturePrice';
import RatingStar from '@components/lectureCard/RatingStar';
import SpeechBubble from '@components/lectureCard/SpeechBubble';
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
  randomColor: () => string;
};

const HashTagStyle = styled.p<HashTagProps>`
  display: inline-block;
  color: #454545;
  background-color: ${(props) => props.randomColor};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0 6px;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 10px;
`;

const LectureShoppingWContents = styled.div`
  margin-left: auto;
  text-align: right;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

type IconButtonStyleProps = {
  otherColor: string;
};

const IconButtonStyle = styled(IconButton)<IconButtonStyleProps>`
  padding: calc(0.375em - 1px) 0;
  color: ${(props) => props.otherColor};

  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin: auto;
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

const HorizonLectrueCard = ({ lecture, index }: Props) => {
  const { id, coverImage, title, rating, commentCount, price, hashTags, onDiscount } = lecture;
  const [isHoverCart, setIsHoverCart] = useState(false);
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const [isHoverPlus, setIsHoverPlus] = useState(false);

  const getRandomColor = () => {
    const h = 360 * Math.random();
    const s = 25 + 70 * Math.random();
    const l = 85 + 10 * Math.random();

    return `hsl(${h} ,${s}%, ${l}%)`;
  };

  return (
    <HorizonLectureCardStyle key={lecture.id} index={index}>
      <a id="thumbnail" href={`/course/${id}`}>
        <LectureCardImage loading="lazy" src={coverImage} alt={title} />
      </a>
      <LectureCardContents>
        <a id="lecture-info-contnents" href={`/course/${id}`}>
          <LectureTitle>{title}</LectureTitle>
          <HashTagsWrapper>
            {!!hashTags &&
              hashTags.map((val: string) => <HashTagStyle randomColor={getRandomColor}>{val}</HashTagStyle>)}
          </HashTagsWrapper>
          <div id="rating-star">
            <RatingStar rating={rating} size="1rem" />
            <LectureCommentCount>({commentCount})</LectureCommentCount>
          </div>
        </a>
        <LectureShoppingWContents>
          <LecturePriceWrapper>
            <LecturePrice price={price} discount={onDiscount} cardStyle="List" />
          </LecturePriceWrapper>
          <LectureCardIconBtnWrapper>
            <IconButtonStyle otherColor="#fda011">
              {isHoverCart && <SpeechBubble message="바구니에 추가하기" />}
              <AddShoppingCartOutlinedIcon
                className="add-icon"
                onMouseEnter={() => setIsHoverCart(true)}
                onMouseLeave={() => setIsHoverCart(false)}
              />
            </IconButtonStyle>
            <IconButtonStyle otherColor="#ff6c5c">
              {isHoverHeart && <SpeechBubble message="위시리스트에 추가하기" />}
              <FavoriteBorderOutlinedIcon
                className="add-icon"
                onMouseEnter={() => setIsHoverHeart(true)}
                onMouseLeave={() => setIsHoverHeart(false)}
              />
            </IconButtonStyle>
            <IconButtonStyle otherColor="#333">
              {isHoverPlus && <SpeechBubble message="내 폴더에 추가하기" />}
              <AddOutlinedIcon
                className="add-icon"
                onMouseEnter={() => setIsHoverPlus(true)}
                onMouseLeave={() => setIsHoverPlus(false)}
              />
            </IconButtonStyle>
          </LectureCardIconBtnWrapper>
        </LectureShoppingWContents>
      </LectureCardContents>
    </HorizonLectureCardStyle>
  );
};

export default HorizonLectrueCard;
