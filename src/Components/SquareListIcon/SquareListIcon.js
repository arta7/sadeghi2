import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import globalStyles from '../../assets/styles/globalStyles';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale, scaleFontSize} from '../../utility/Scale';
import {FONT_FAMILY} from '../../constants/constants';

const SquareListIcon = props => {
  //container style
  const containerStyle = {
    marginTop: props.containerTopPadding,
    marginBottom: props.containerBottomPadding,
  };

  //title style
  const commonTitleStyle = {
    fontSize: scaleFontSize(props.titleFontSize),
    fontWeight: props.titleFontWeight,
    fontFamily: props.titleFontFamily,
    color: props.titleFontColor,
  };

  //left icon style
  const leftIconStyle = {
    marginLeft: horizontalScale(props.leftIconLeftPadding),
    marginRight: horizontalScale(props.leftIconRightPadding),
  };

  //right icon style
  const rightIconStyle = {
    paddingRight: horizontalScale(props.rightIconRightPadding),
    paddingLeft: horizontalScale(props.rightIconLeftPadding),
  };

  return (
    <TouchableOpacity onPress={() => props.onPress && props.onPress()}>
      <View style={[containerStyle, styles.borderImage]}>
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
          ]}>
          {/*--Left Icon Start--*/}
          <View style={[leftIconStyle]}>{props.leftIconComponent}</View>
          {/*--Left Icon End--*/}

          {/*--List Item Title Start--*/}
          <View style={globalStyles.flex}>
            <Text style={commonTitleStyle}>{props.title}</Text>
          </View>
          {/*--List Item Title End--*/}

          {/*--Right Icon Start--*/}
          <View style={rightIconStyle}>{props.rightIconComponent}</View>
          {/*--Right Icon End--*/}
        </View>
      </View>
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
SquareListIcon.defaultProps = {
  backgroundColor: allColors.white,
  containerBottomPadding: 0,
  containerTopPadding: 0,
  leftIconComponent: null,
  leftIconLeftPadding: 19,
  leftIconRightPadding: 34,
  rightIconComponent: null,
  rightIconLeftPadding: 32,
  rightIconRightPadding: 32,
  showBorder: false,
  title: '',
  titleFontColor: allColors.black,
  titleFontFamily: FONT_FAMILY.RobotoCondensedLight,
  titleFontSize: 15,
  titleFontWeight: '300',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
SquareListIcon.propTypes = {
  backgroundColor: PropTypes.string,
  containerBottomPadding: PropTypes.number,
  containerTopPadding: PropTypes.number,
  leftIconComponent: PropTypes.object,
  leftIconLeftPadding: PropTypes.number,
  leftIconRightPadding: PropTypes.number,
  onPress: PropTypes.func,
  rightIconComponent: PropTypes.object,
  rightIconLeftPadding: PropTypes.number,
  rightIconRightPadding: PropTypes.number,
  showBorder: PropTypes.bool,
  title: PropTypes.string,
  titleFontColor: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default SquareListIcon;
