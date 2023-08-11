import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';

const BorderCategoryWithBelowTitle = props => {
  //custom style definitions
  const titleStyle = {
    fontFamily: props.titleFontFamily,
    fontSize: scaleFontSize(props.titleFontSize),
    fontWeight: props.titleFontWeight,
    color: allColors.secondaryButtonBlack,
    marginTop: verticalScale(props.titlePaddingTop),
    textTransform: 'capitalize'
  };

  const descriptionStyle = {
    fontFamily: props.descriptionFontFamily,
    fontSize: scaleFontSize(props.descriptionFontSize),
    fontWeight: props.descriptionFontWeight,
    color: props.descriptionFontColor,
    marginTop: verticalScale(props.descriptionPaddingTop),
    opacity: 0.5,
    textTransform: 'capitalize'
  };

  const containerCommonStyle = {
    borderRadius: props.componentBorderRadius,
    paddingTop: verticalScale(props.componentPaddingTop),
    paddingBottom: verticalScale(props.componentPaddingBottom),
    alignItems: props.informationAlignment === 'left' ? 'flex-start' : 'center',
    paddingLeft: horizontalScale(props.componentPaddingLeft),
    backgroundColor: props.containerBackgroundColor,
    borderColor: props.containerBorderColor,
    borderWidth: 0.3,
    overflow:'hidden',
    height:props.Height
  };

  const mainContainerStyle = {
    marginBottom: verticalScale(props.componentMarginBottom),
    marginTop: verticalScale(props.componentMarginTop),
    marginLeft: horizontalScale(props.componentMarginLeft),
    marginRight: horizontalScale(props.componentMarginRight),
    width: props.componentWidth,
  };

  return (
    <View style={mainContainerStyle} activeOpacity={0.7}>
      {/*--Image Start--*/}
      <TouchableOpacity
        onPress={() => props.onPress()}
        activeOpacity={0.7}
        style={containerCommonStyle}>
        <View>
          {props.isActive
            ? props.activeImageComponent
            : props.inactiveImageComponent}
        </View>
      </TouchableOpacity>
      {/*--Image End--*/}
      {/*--Title Start--*/}
      <Text style={titleStyle} >{props.title}</Text>
      {/*--Title End--*/}
      {/*--Description Start--*/}
      <Text style={descriptionStyle} ellipsizeMode='clip' numberOfLines={1}>{props.description}</Text>
      {/*--Description End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
BorderCategoryWithBelowTitle.defaultProps = {
  activeImageComponent: null,
  componentBorderRadius: 0,
  componentMarginBottom: 0,
  componentMarginLeft: 0,
  componentMarginRight: 0,
  componentMarginTop: 0,
  componentPaddingBottom: 25,
  componentPaddingLeft: 0,
  componentPaddingTop: 33,
  componentWidth: '50%',
  containerBackgroundColor: allColors.white,
  containerBorderColor: allColors.borderBlack,
  description: '',
  descriptionFontColor: allColors.black,
  descriptionFontFamily: FONT_FAMILY.RobotoLight,
  descriptionFontSize: 13,
  descriptionFontWeight: '300',
  descriptionPaddingTop: 2,
  inactiveImageComponent: null,
  informationAlignment: 'center',
  isActive: true,
  title: '',
  titleFontFamily: FONT_FAMILY.RobotoCondensedRegular,
  titleFontSize: 16,
  titleFontWeight: 'normal',
  titlePaddingTop: 7,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
BorderCategoryWithBelowTitle.propTypes = {
  activeImageComponent: PropTypes.object,
  componentBorderRadius: PropTypes.number,
  componentMarginBottom: PropTypes.number,
  componentMarginLeft: PropTypes.number,
  componentMarginRight: PropTypes.number,
  componentMarginTop: PropTypes.number,
  componentPaddingBottom: PropTypes.number,
  componentPaddingLeft: PropTypes.number,
  componentPaddingTop: PropTypes.number,
  componentWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  containerBackgroundColor: PropTypes.string,
  containerBorderColor: PropTypes.string,
  description: PropTypes.string,
  descriptionFontColor: PropTypes.string,
  descriptionFontFamily: PropTypes.string,
  descriptionFontSize: PropTypes.number,
  descriptionFontWeight: PropTypes.string,
  descriptionPaddingTop: PropTypes.number,
  inactiveImageComponent: PropTypes.object,
  informationAlignment: PropTypes.string,
  isActive: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
  titlePaddingTop: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/

export default BorderCategoryWithBelowTitle;
