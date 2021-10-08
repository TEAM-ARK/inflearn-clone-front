import React from 'react';
import styled from 'styled-components';

interface IPriceStyleProps {
  cardStyle: 'Grid' | 'List';
}

const CurrentPrice = styled.span<IPriceStyleProps>`
  font-size: 1.125rem;
  font-weight: 700;
  margin-left: 0.25rem;
  ${(props) => (props.cardStyle === 'Grid' ? 'color: var(--color-blue);' : '')}

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.cardStyle === 'Grid' ? '0.9rem' : '1rem')};
  }
`;

const OriginalPrice = styled.del<IPriceStyleProps>`
  ${(props) => (props.cardStyle === 'Grid' ? 'color: #595959;' : '')}
  opacity: ${(props) => (props.cardStyle === 'Grid' ? '0.75' : '0.7')};
  font-size: ${(props) => (props.cardStyle === 'Grid' ? '0.9rem' : '0.875rem')};
  font-weight: ${(props) => (props.cardStyle === 'Grid' ? '500' : '700')};

  @media screen and (max-width: 768px) {
    ${(props) => (props.cardStyle === 'Grid' ? 'font-size: 0.85rem' : '')};
  }
`;
type Props = {
  price: number;
  discount: number | undefined;
  cardStyle: IPriceStyleProps['cardStyle'];
};

const LecturePrice = ({ price, discount, cardStyle }: Props) => {
  const discountPrice = discount ? Math.ceil(price * ((100 - discount) / 100)) : 0;

  return (
    <>
      {discountPrice === 0 ? (
        <CurrentPrice cardStyle={cardStyle}>
          &#8361;{price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        </CurrentPrice>
      ) : (
        <>
          <OriginalPrice cardStyle={cardStyle}>
            &#8361;{price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          </OriginalPrice>
          <CurrentPrice cardStyle={cardStyle}>
            &#8361;{discountPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          </CurrentPrice>
        </>
      )}
    </>
  );
};

export default LecturePrice;
