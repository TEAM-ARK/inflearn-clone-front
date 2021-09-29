import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import styled from 'styled-components';
import SpeechBubble from '@components/lectureCard/SpeechBubble';

type IconButtonStyleProps = {
  iconcolor: string;
};

const IconButtonStyle = styled(IconButton)<IconButtonStyleProps>`
  padding: calc(0.375em - 1px) 0;
  color: ${(props) => props.iconcolor};

  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin: auto;
  }
`;

const IconButtons = () => {
  const [isHoverCart, setIsHoverCart] = useState(false);
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const [isHoverPlus, setIsHoverPlus] = useState(false);

  return (
    <>
      <IconButtonStyle iconcolor="#fda011">
        <AddShoppingCartOutlinedIcon
          className="add-icon"
          onMouseOver={() => setIsHoverCart(true)}
          onMouseLeave={() => setIsHoverCart(false)}
        />
        {isHoverCart && <SpeechBubble message="바구니에 추가히기" />}
      </IconButtonStyle>
      <IconButtonStyle iconcolor="#ff6c5c">
        {isHoverHeart && <SpeechBubble message="위시리스트에 추가하기" />}
        <FavoriteBorderOutlinedIcon
          className="add-icon"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        />
      </IconButtonStyle>
      <IconButtonStyle iconcolor="#333">
        {isHoverPlus && <SpeechBubble message="내 폴더에 추가하기" />}
        <AddOutlinedIcon
          className="add-icon"
          onMouseEnter={() => setIsHoverPlus(true)}
          onMouseLeave={() => setIsHoverPlus(false)}
        />
      </IconButtonStyle>
    </>
  );
};

export default IconButtons;
