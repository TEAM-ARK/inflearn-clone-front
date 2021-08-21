import React, { useState } from 'react';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import Link from 'next/link';
import styled from 'styled-components';
import { ILecture } from 'src/redux/reducers/types';
import SpeechBubble from './SpeechBubble';

const SLectureCardHover = styled.article`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  overflow: auto;
  font-weight: 550;
`;

const TagsContainer = styled.div`
  color: #c5ebf8;
`;
const EachTags = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    transform: scale(0.7);
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
    & > svg {
      transform: scale(0.9);
      &:hover {
        cursor: grab;
      }
    }
  }
`;

const CartIconWrapper = styled.div`
  & > svg {
    &:nth-child(2) {
      &:hover {
        color: #c5ebf8;
      }
    }
  }
`;

const HeartIconWrapper = styled.div`
  & > svg {
    &:nth-child(2) {
      &:hover {
        color: #e74c3c;
      }
    }
  }
`;

type Props = {
  lecture: ILecture;
};

const LectureCardHover = ({ lecture }: Props) => {
  const [isHoverCart, setIsHoverCart] = useState(false);
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const [isHoverPlus, setIsHoverPlus] = useState(false);
  const { title, description, hashTags, categories, level, id } = lecture;
  // console.log('LectureCardHover lecture:', lecture);
  return (
    <Link href={`/course/${id}`}>
      <SLectureCardHover>
        <h3>{title}</h3>
        <p>{description}</p>
        <TagsContainer>
          <EachTags>
            <SignalCellularAltIcon />
            <span>{level}</span>
          </EachTags>
          <EachTags>
            <AccountTreeOutlinedIcon />
            {categories?.map((category, index) => {
              return `${category}${!(index === categories.length - 1) && ', '}`;
            })}
          </EachTags>
          <EachTags>
            <LocalOfferOutlinedIcon />
            {hashTags?.map((tag, index) => {
              return `${tag}${!(index === hashTags.length - 1) && ', '}`;
            })}
          </EachTags>
        </TagsContainer>
        <IconContainer>
          {/* icons */}
          <CartIconWrapper>
            {isHoverCart && <SpeechBubble message="바구니에 추가" />}
            <AddShoppingCartOutlinedIcon
              onMouseEnter={() => setIsHoverCart(true)}
              onMouseLeave={() => setIsHoverCart(false)}
            />
          </CartIconWrapper>
          <HeartIconWrapper>
            {isHoverHeart && <SpeechBubble message="위시 리스트에 추가" />}
            <FavoriteBorderOutlinedIcon
              onMouseEnter={() => setIsHoverHeart(true)}
              onMouseLeave={() => setIsHoverHeart(false)}
            />
          </HeartIconWrapper>
          <div>
            {isHoverPlus && <SpeechBubble message="내 목록에 추가" />}
            <AddOutlinedIcon onMouseEnter={() => setIsHoverPlus(true)} onMouseLeave={() => setIsHoverPlus(false)} />
          </div>
        </IconContainer>
      </SLectureCardHover>
    </Link>
  );
};

export default LectureCardHover;
