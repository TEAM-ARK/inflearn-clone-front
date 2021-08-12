import { useEffect } from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';
import { RootState } from 'src/redux/reducers';
import { LOAD_SLIDER_REQUEST } from 'src/redux/reducers/lecture';
// import { mainSliderData } from '../../api/dummyData';
import MainSliderItem from './MainSliderItem';

const SliderWrapper = styled.div`
  background: pink;
  overflow: hidden;
  cursor: pointer;
`;

const MainSlider = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  const { mainSliderList } = useSelector((state: RootState) => state.lecture);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LOAD_SLIDER_REQUEST });
  }, []);

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
          {/* {console.log(mainSliderList)} */}
          {mainSliderList.map((item) => (
            <MainSliderItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </SliderWrapper>
  );
};

export default MainSlider;
