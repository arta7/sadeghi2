import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import {allColors} from '../../assets/styles/mainColors';
import {scaleFontSize} from '../../utility/Scale';

const TitleWithUnderline = props => {
  //title styles
  const titleCommonStyle = {
    fontSize: scaleFontSize(props.titleFontSize),
    fontWeight: props.titleFontWeight,
  };

  //border styles
  const borderStyle = {
    borderBottomWidth: 0.5,
    marginTop: props.borderMarginTop,
    width: props.bottomBorderWidth,
    borderColor: props.borderBottomColor,
  };

  return (
    <View>
      {/*--Title Start--*/}
      <Text style={[titleCommonStyle, globalStyles.RobotoCondensedFont300]}>
        {props.title}
      </Text>
      {/*--Title End--*/}

      {/*--Underline Start--*/}
      <View style={borderStyle} />
      {/*--Underline End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
TitleWithUnderline.defaultProps = {
  borderBottomColor: allColors.black,
  bottomBorderWidth: '100%',
  borderMarginTop: 2,
  title: null,
  titleFontSize: 18,
  titleFontWeight: 'normal',
};
/*---- Default Props End -------*/

TitleWithUnderline.propTypes = {
  borderBottomColor: PropTypes.string,
  bottomBorderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderMarginTop: PropTypes.number,
  title: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
};

export default TitleWithUnderline;
