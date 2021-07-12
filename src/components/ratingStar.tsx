import { FC } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

interface IRatingStarProps {
  rating: number;
  size: string;
}

const RatingStar: FC<IRatingStarProps> = ({ rating, size }: IRatingStarProps) => {
  /**
   * rating의 정수 부분만큼 꽉찬 별을 넣고
   * rating의 소수 부분이 0.1 ~ 0.6 이면 반개 추가
   * 5칸 중 나머진 빈별로 채움
   */

  const ratingInteger = Math.floor(rating);
  const ratingDecimal = rating - ratingInteger;
  const halfStarCount = ratingDecimal > 0.1 && ratingDecimal < 0.6 ? 1 : 0;
  const emptyStartCount = 5 - ratingInteger - halfStarCount;
  const starStyle = {
    fontSize: `${size}`,
  };

  return (
    <span className="rating__star">
      {Array(ratingInteger)
        .fill()
        .map(() => (
          <StarIcon
            style={{
              fontSize: `${size}`,
            }}
          />
        ))}
      {Array(halfStarCount)
        .fill()
        .map(() => (
          <StarHalfIcon style={starStyle} />
        ))}
      {Array(emptyStartCount)
        .fill()
        .map(() => (
          <StarBorderIcon style={starStyle} />
        ))}
    </span>
  );
};

export default RatingStar;
