import { FC } from 'react';
import Link from 'next/link';
import RatingStar from 'src/components/ratingStar';

interface ILectureProps {
  id: string;
  coverImage: string;
  title: string;
  author: string;
  rating: number;
  commentCount: number;
  price: number;
  studentCount: number;
}

const LectureCard: FC<ILectureProps> = ({
  id,
  coverImage,
  title,
  author,
  rating,
  commentCount,
  price,
  studentCount,
}: ILectureProps) => {
  const studentCountFloor = Math.floor(studentCount / 100) * 100;

  return (
    <li key={id} className="lecture__card">
      <Link href={`/course/${id}`}>
        <div className="lecture__card__wrapper">
          <div className="lecture__card__image" style={{ backgroundImage: `url(${coverImage})` }} />
          <div className="lecture__card__contents">
            <h3 className="lecture__card__title">{title}</h3>
            <div className="lecture__card__author">{author}</div>
            <div className="lecture__card__rating">
              <RatingStar rating={rating} size="1rem" />
              <span className="lecture__card__review-count">{`(${commentCount})`}</span>
            </div>
            <div className="lecture__card__price">
              &#8361;{price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </div>
            <div className="lecture__card__tags">
              <span className="tag">{`+${studentCountFloor}명`}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default LectureCard;
