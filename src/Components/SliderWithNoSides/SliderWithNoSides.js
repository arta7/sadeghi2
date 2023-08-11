import React from 'react';

//Third Party
import PropTypes from 'prop-types';

//Utils
import SliderView from './SliderComponent';

const SliderWithNoSides = props => {
  return <SliderView data={props.informationArray} title={props.title} Address={props.Address}/>;
};

/*---- Default Props Start -------*/
SliderWithNoSides.defaultProps = {
  informationArray: [],
  title: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
SliderWithNoSides.propTypes = {
  informationArray: PropTypes.array,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default SliderWithNoSides;
