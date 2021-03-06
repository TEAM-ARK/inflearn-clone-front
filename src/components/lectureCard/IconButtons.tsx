import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import styled from 'styled-components';
import SpeechBubble from '@components/lectureCard/SpeechBubble';

const getListStyle = (color: string) => `
  padding: calc(0.375em - 1px) 0;
  color: ${color};
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin: auto;

    & > span > svg {
      transform: scale(0.7);
    }
  }
`;

const getGridStyle = (color: string) => `
  color: #ffffff;

  &:hover {
    color: ${color};
  }
`;

type Props = {
  view: 'Grid' | 'List';
};

type IconButtonStyleProps = {
  view: Props['view'];
  iconcolor: string;
};

const IconButtonStyle = styled(IconButton)<IconButtonStyleProps>`
  ${(props) => (props.view === 'Grid' ? getGridStyle(props.iconcolor) : getListStyle(props.iconcolor))}
`;

const IconButtons = ({ view }: Props) => {
  const [isHoverCart, setIsHoverCart] = useState(false);
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const [isHoverPlus, setIsHoverPlus] = useState(false);

  return (
    <>
      <IconButtonStyle iconcolor={view === 'Grid' ? '#c5ebf8' : '#fda011'} view={view}>
        {isHoverCart && <SpeechBubble message="바구니에 추가" />}
        <AddShoppingCartOutlinedIcon
          onMouseOver={() => setIsHoverCart(true)}
          onMouseLeave={() => setIsHoverCart(false)}
        />
      </IconButtonStyle>
      <IconButtonStyle iconcolor={view === 'Grid' ? '#e74c3c' : '#ff6c5c'} view={view}>
        {isHoverHeart && <SpeechBubble message="위시리스트에 추가" />}
        <FavoriteBorderOutlinedIcon
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        />
      </IconButtonStyle>
      <IconButtonStyle iconcolor={view === 'Grid' ? 'none' : '#333'} view={view}>
        {isHoverPlus && <SpeechBubble message="내 폴더에 추가" />}
        <AddOutlinedIcon onMouseEnter={() => setIsHoverPlus(true)} onMouseLeave={() => setIsHoverPlus(false)} />
      </IconButtonStyle>
    </>
  );
};

export default IconButtons;
