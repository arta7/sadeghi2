import React from 'react';
import {Image} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import {horizontalScale, verticalScale} from '../../../utility/Scale';

const LogoIcon = props => {
  let logo = (
    <Image
      source={require('../../../assets/placeholders/57x57.png')}
      style={{
        height: horizontalScale(57),
        width: verticalScale(57),
        borderRadius: 3,
      }}
    />
  );
  if (props.colored) {
    logo = (
      <Image
        source={require('../../../assets/placeholders/57x57.png')}
        style={{
          height: horizontalScale(57),
          width: verticalScale(57),
          borderRadius: 3,
        }}
      />
    );
  }
  return <React.Fragment>{logo}</React.Fragment>;
};
/*---- Default Props Start -------*/
LogoIcon.defaultProps = {
  colored: false,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
LogoIcon.propTypes = {
  colored: PropTypes.bool,
};
/*---- Prop Type Expectations End -------*/
export default LogoIcon;
