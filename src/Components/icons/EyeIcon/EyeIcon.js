import React from 'react';
//Publicly Available Icons that Can be Used for Commercial Purposes
import Eye from '../../../assets/icons/generalIcons/eyeSVG.svg';
import ClosedEye from '../../../assets/icons/generalIcons/eyeCloseSVG.svg';
import {
  horizontalPercentageScale,
  verticalPercentageScale,
} from '../../../utility/Scale';
import PropTypes from 'prop-types';

const EyeIcon = props => {
  if (props.isClosed) {
    return (
      <ClosedEye
        width={horizontalPercentageScale(5)}
        height={verticalPercentageScale(5)}
      />
    );
  }
  return (
    <Eye
      width={horizontalPercentageScale(5)}
      height={verticalPercentageScale(5)}
    />
  );
};
export default EyeIcon;
EyeIcon.defaultProps = {
  isClosed: false,
};

EyeIcon.propTypes = {
  isClosed: PropTypes.bool,
};
