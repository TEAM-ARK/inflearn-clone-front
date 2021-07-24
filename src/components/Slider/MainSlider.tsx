import { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { mainSliderData } from '../../api/dummyData';
import MainSliderItem from './MainSliderItem';

const SliderWrapper = styled.div`
  background: pink;
  overflow: hidden;
  cursor: pointer;
`;

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <SliderWrapper>
      <div>
        <Slider
          arrows={false}
          initialSlide={0}
          slidesToShow={1}
          swipeToSlide
          infinite
          pauseOnHover
          autoplay
          autoplaySpeed={5000}
          // dots={true}
        >
          {mainSliderData.map((item) => (
            <MainSliderItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </SliderWrapper>
  );
};

export default MainSlider;
