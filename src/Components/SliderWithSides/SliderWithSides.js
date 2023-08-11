import React from 'react';

//Third Party
import PropTypes from 'prop-types';
//https://github.com/meliorence/react-native-snap-carousel
import Carousel from 'react-native-snap-carousel';

//Utils
import {screenWidth} from '../../utility/Scale';

const SliderWithSides = props => {
  return (
    <Carousel
      layout={'default'}
      data={props.informationArray}
      sliderWidth={props.sliderWidth}
      itemWidth={props.itemWidth}
      renderItem={props.customSlideComponent}
      loop={true}
      maxToRenderPerBatch={3}
      initialNumToRender={5}
    />
  );
};

/*---- Default Props Start -------*/
SliderWithSides.defaultProps = {
  informationArray: [],
  itemWidth: screenWidth * 0.8,
  sliderWidth: screenWidth,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
SliderWithSides.propTypes = {
  customSlideComponent: PropTypes.func,
  informationArray: PropTypes.array,
  itemWidth: PropTypes.number,
  sliderWidth: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/
export default SliderWithSides;
