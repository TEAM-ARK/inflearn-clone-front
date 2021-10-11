import { FC } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import styled from 'styled-components';

type RatingStarProps = {
  size: string;
  responsive?: boolean;
};

const RatingStarStyle = styled.span<RatingStarProps>`
  color: var(--color-yellow);

  & svg {
    font-size: ${(props) => props.size};
  }

  @media screen and (max-width: 768px) {
    & svg {
      ${(props) => (props.responsive ? 'font-size: 1rem;' : '')}
    }
  }
`;

interface IRatingStarProps {
  rating: number;
  size: string;
  responsive?: boolean;
}

const RatingStar: FC<IRatingStarProps> = ({ rating, size, responsive }: IRatingStarProps) => {
  /**
   * rating의 정수 부분만큼 꽉찬 별을 넣고
   * rating의 소수 부분이 0.1 ~ 0.6 이면 반개 추가
   * 5칸 중 나머진 빈별로 채움
   */

  const ratingInteger = Math.floor(rating);
  const ratingDecimal = rating - ratingInteger;
  const halfStarCount = ratingDecimal > 0.1 && ratingDecimal < 0.9 ? 1 : 0;
  const emptyStartCount = 5 - ratingInteger - halfStarCount < 0 ? 0 : 5 - ratingInteger - halfStarCount;
  const fullStartCount = ratingDecimal >= 0.9 ? ratingInteger + 1 : ratingInteger;

  return (
    <RatingStarStyle className="rating__star" responsive={responsive} size={size}>
      {Array(fullStartCount)
        .fill('')
        .map((_, index) => (
          <StarIcon key={index} />
        ))}
      {Array(halfStarCount)
        .fill('')
        .map((_, index) => (
          <StarHalfIcon key={index} />
        ))}
      {Array(emptyStartCount)
        .fill('')
        .map((_, index) => (
          <StarBorderIcon key={index} />
        ))}
    </RatingStarStyle>
  );
};

export default RatingStar;
