import React from 'react';
//Publicly Available Icons that Can be Used for Commercial Purposes
import PASSWORD from '../../../assets/icons/generalIcons/lockSVG.svg';
import {
  horizontalPercentageScale,
  verticalPercentageScale,
} from '../../../utility/Scale';

const PasswordIcon = () => {
  return (
    <PASSWORD
      width={horizontalPercentageScale(4)}
      height={verticalPercentageScale(4)}
    />
  );
};
export default PasswordIcon;
