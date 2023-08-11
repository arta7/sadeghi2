import React, {createRef, useState} from 'react';
import {ScrollView} from 'react-native';
import globalStyles from '../../../assets/styles/globalStyles';

//Utils
import {screenWidth} from '../../../utility/Scale';
import CarouselSlide from './components/Slide';

//Third Party
import PropTypes from 'prop-types';

const stepCarousel = createRef();

const SliderView = props => {
  const [totalSlide, setTotalSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [data, setData] = useState(props.data);
  const [isFirstPageSet, setFirstPage] = useState(false);
  const setTotalSlides = contentWidth => {
    if (contentWidth !== 0) {
      const approxSlide = contentWidth / screenWidth;
      if (totalSlide !== parseInt(approxSlide)) {
        setTotalSlide(parseInt(Math.ceil(approxSlide.toFixed(2))));
        calculateNextPrev(parseInt(approxSlide), currentSlide);
      }
    }
  };

  const handleScrollEnd = e => {
    if (!e) {
      return;
    }
    const {nativeEvent} = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      let currSlide = 1;
      if (nativeEvent.contentOffset.x === 0) {
        setCurrentSlide(currSlide);
      } else {
        const approxCurrentSlide = nativeEvent.contentOffset.x / screenWidth;
        currSlide = parseInt(Math.ceil(approxCurrentSlide.toFixed(2)) + 1);
        setCurrentSlide(currSlide);
      }
      calculateNextPrev(totalSlide, currSlide);
    }
  };

  const calculateNextPrev = (totalPage, currentPage) => {
    if (currentPage === 1 && !isFirstPageSet) {
      setData([...props.data, ...data]);
      setFirstPage(true);
    }

    if (totalPage < currentPage) {
      setData([...data, ...props.data]);
    }
    if (currentPage + 1 === totalPage) {
      setData([...data, ...props.data]);
    }
  };

  const noOfSlides = Math.ceil(data.length / 2);

  return (
    <ScrollView
      ref={stepCarousel}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      decelerationRate={0}
      snapToAlignment={'center'}
      onContentSizeChange={setTotalSlides}
      onMomentumScrollEnd={handleScrollEnd}
      contentContainerStyle={[
        globalStyles.justifyCenter,
        globalStyles.alignItemsCenter,
        globalStyles.alignContentCenter,
      ]}>
      {[...Array(noOfSlides)].map((e, i) => {
        const startIndex = i + 1;
        const startPosition = startIndex + (startIndex - 1) - 1;
        const endPosition = startIndex * 2;
        return (
          <CarouselSlide
            key={i}
            title={props.title}
            cards={data.slice(startPosition, endPosition)}
            Address={props.Address}
          />
        );
      })}
    </ScrollView>
  );
};
/*---- Default Props Start -------*/
SliderView.defaultProps = {
  data: [],
  title: '',
};
/*---- Default Props End -------*/
/*---- Prop Type Expectations Start -------*/
SliderView.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default SliderView;
