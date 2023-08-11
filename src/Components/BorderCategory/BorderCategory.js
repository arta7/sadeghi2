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

//Publicly Available Icons that Can be Used for Commercial Purposes
import AddIcon from '../../assets/icons/discoverMenuIcons/addSVG.svg';

const BorderCategory = props => {
  /*-- Generate title style using the props start ---*/
  const titleStyle = {
    fontFamily: props.titleFontFamily,
    fontSize: scaleFontSize(props.titleFontSize),
    fontWeight: props.titleFontWeight,
    color: allColors.secondaryButtonBlack,
    marginTop: verticalScale(props.titlePaddingTop),
  };
  /*-- Generate title style using the props end ---*/

  /*-- Generate description style using the props start ---*/
  const descriptionStyle = {
    fontFamily: props.descriptionFontFamily,
    fontSize: scaleFontSize(props.descriptionFontSize),
    fontWeight: props.descriptionFontWeight,
    color: props.descriptionFontColor,
    marginTop: verticalScale(props.descriptionPaddingTop),
  };
  /*-- Generate description style using the props end ---*/

  /*-- Generate generic component style using the props start ---*/
  const containerCommonStyle = {
    borderRadius: props.componentBorderRadius,
    paddingTop: verticalScale(props.componentPaddingTop),
    paddingBottom: verticalScale(props.componentPaddingBottom),
    width: props.componentWidth,
    marginBottom: verticalScale(props.componentMarginBottom),
    marginTop: verticalScale(props.componentMarginTop),
    marginLeft: horizontalScale(props.componentMarginLeft),
    marginRight: horizontalScale(props.componentMarginRight),
    alignItems: props.informationAlignment === 'left' ? 'flex-start' : 'center',
    paddingLeft: horizontalScale(props.componentPaddingLeft),
    backgroundColor: props.containerBackgroundColor,
    borderColor: props.containerBorderColor,
    borderWidth: props.borderWidth,
  };
  /*-- Generate generic component style using the props end ---*/

  /*-- Generate generic empty component style using the props start ---*/
  const emptyBoxContainer = {
    borderRadius: props.componentBorderRadius,
    paddingTop: verticalScale(props.componentPaddingTop),
    paddingBottom: verticalScale(props.componentPaddingBottom),
    width: props.componentWidth,
    marginBottom: verticalScale(props.componentMarginBottom),
    marginTop: verticalScale(props.componentMarginTop),
    marginLeft: horizontalScale(props.componentMarginLeft),
    marginRight: horizontalScale(props.componentMarginRight),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: props.containerBackgroundColor,
    borderColor: props.containerBorderColor,
    borderWidth: props.borderWidth,
  };
  /*-- Generate generic empty component style using the props end ---*/

  /*---- Render the item view weather empty or not using the styles created above ---*/
  return props.type === 'ITEM' ? (
    <TouchableOpacity
      style={containerCommonStyle}
      onPress={() => props.onPress(props.itemData)}
      activeOpacity={0.7}>
      {/*--Active Image Start--*/}
      <View>{props.activeImageComponent}</View>
      {/*--Active Image End--*/}

      {/*--Title Start--*/}
      <Text style={titleStyle}>{props.title}</Text>
      {/*--Title End--*/}

      {/*--Description Start--*/}
      {props.description.length > 0 && (
        <Text style={descriptionStyle} ellipsizeMode='head' numberOfLines={1} >{props.description}</Text>
      )}
      {/*--Description End--*/}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={emptyBoxContainer}
      onPress={() => props.onPress(props.itemData)}
      activeOpacity={0.7}>
      <AddIcon height={30} width={30} />
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
BorderCategory.defaultProps = {
  activeImageComponent: null,
  borderWidth: 0.3,
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
  informationAlignment: 'centered',
  title: '',
  titleFontFamily: FONT_FAMILY.RobotoCondensedRegular,
  titleFontSize: 16,
  titleFontWeight: 'normal',
  titlePaddingTop: 7,
  type: 'ITEM',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
BorderCategory.propTypes = {
  activeImageComponent: PropTypes.object,
  borderWidth: PropTypes.number,
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
  informationAlignment: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
  titlePaddingTop: PropTypes.number,
  type: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/

export default BorderCategory;
