import { FC } from 'react';
import Link from 'next/link';
import RatingStar from 'src/components/ratingStar';

interface ILectureProps {
  id: string;
  coverImage: string;
  title: string;
  author: string;
  commentCount: number;
  price: number;
  studentCount: number;
}

const LectureCard: FC<ILectureProps> = ({
  id,
  coverImage,
  title,
  author,
  commentCount,
  price,
  studentCount,
}: ILectureProps) => {
  return (
    <Link key={id} href={`/course/${id}`}>
      <li className="lecture__card">
        <div className="lecture__card__wrapper">
          <div className="lecture__card__image" style={{ backgroundImage: `url(${coverImage})` }} />
          <div className="lecture__card__contents">
            <h3 className="lecture__card__title">{title}</h3>
            <div className="lecture__card__author">{author}</div>
            <div className="rating">
              <RatingStar />
              <span className="lecture__card__review-count">{`(${commentCount})`}</span>
            </div>
            <div className="lecture__card__price">&#8361;{`${price}`}</div>
            <div className="lecture__card__tags">
              <span className="tag">{`+${studentCount}명`}</span>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default LectureCard;
