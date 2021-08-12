import React from 'react';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import Link from 'next/link';
import styled from 'styled-components';
import { ILecture } from 'src/redux/reducers/types';

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

const TagsConatiner = styled.div`
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
  & > svg {
    transform: scale(0.9);
    &:hover {
      cursor: grab;
    }
    &:first-child {
      &:hover {
        color: #c5ebf8;
      }
    }
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
  const { title, description, hashTags, categories, level, id } = lecture;
  console.log('LectureCardHover lecture:', lecture);
  return (
    <Link href={`/course/${id}`}>
      <SLectureCardHover>
        <h3>{title}</h3>
        <p>{description}</p>
        <TagsConatiner>
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
        </TagsConatiner>
        <IconContainer>
          {/* icons */}
          <AddShoppingCartOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <AddOutlinedIcon />
        </IconContainer>
      </SLectureCardHover>
    </Link>
  );
};

export default LectureCardHover;
