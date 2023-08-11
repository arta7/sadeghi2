import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import {scaleFontSize} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';

const UnderlineTextIcon = props => {
  //container styles
  const containerStyle = {
    color: props.color,
    fontSize: scaleFontSize(props.fontSize),
    fontWeight: props.fontWeight,
    fontFamily: props.fontFamily,
    textDecorationLine: props.isUnderlined ? 'underline' : 'none',
    ...props.style,
  };

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
      {/*--Title Start--*/}
      <Text style={containerStyle}>{props.title}</Text>
      {/*--Title End--*/}

      {/*--Right Icon Start--*/}
      {props.rightIconSVG && props.rightIconSVG}
      {/*--Right Icon End--*/}
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
UnderlineTextIcon.defaultProps = {
  color: allColors.black,
  fontFamily: FONT_FAMILY.RobotoRegular,
  fontSize: scaleFontSize(15),
  fontWeight: 'normal',
  isUnderlined: true,
  rightIconSVG: null,
  title: null,
};
/*---- Default Props End -------*/

UnderlineTextIcon.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  isUnderlined: PropTypes.bool,
  onPress: PropTypes.func,
  rightIconSVG: PropTypes.object,
  title: PropTypes.string,
};

export default UnderlineTextIcon;
