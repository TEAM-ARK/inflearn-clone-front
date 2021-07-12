import { FC } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const RatingStar: FC = () => {
  return (
    <span className="rating__star">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarHalfIcon />
      <StarBorderIcon />
    </span>
  );
};

export default RatingStar;
