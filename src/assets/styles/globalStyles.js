import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  screenHeight,
  screenWidth,
  verticalScale,
} from '../../utility/Scale';
import {allColors} from './mainColors';
const globalStyles = StyleSheet.create({
  /*---------------- Layout Styles ------------------*/

  flex: {
    flex: 1,
  },

  flexGrow1: {
    flexGrow: 1,
  },

  horizontalGeneralPadding: {
    paddingHorizontal: horizontalScale(37),
  },

  marginLeftGeneral: {
    marginLeft: horizontalScale(37),
  },

  marginTop5: {
    marginTop: verticalScale(5),
  },

  marginTop10: {
    marginTop: verticalScale(10),
  },

  marginTop13: {
    marginTop: verticalScale(13),
  },

  marginTop15: {
    marginTop: verticalScale(15),
  },

  marginTop20: {
    marginTop: verticalScale(20),
  },

  marginTop25: {
    marginTop: verticalScale(25),
  },

  marginTop30: {
    marginTop: verticalScale(30),
  },

  marginTop35: {
    marginTop: verticalScale(35),
  },

  marginTop40: {
    marginTop: verticalScale(40),
  },
  marginBottom5: {
    marginBottom: verticalScale(5),
  },
  marginBottom11: {
    marginBottom: verticalScale(11),
  },
  marginBottom15: {
    marginBottom: verticalScale(15),
  },
  marginBottom20: {
    marginBottom: verticalScale(20),
  },
  marginBottom30: {
    marginBottom: verticalScale(30),
  },
  paddingTop10: {
    paddingTop: verticalScale(10),
  },
  paddingTop11: {
    paddingTop: verticalScale(11),
  },
  paddingTop15: {
    paddingTop: verticalScale(15),
  },
  paddingTop20: {
    paddingTop: verticalScale(20),
  },
  paddingBottom15: {
    paddingBottom: verticalScale(15),
  },
  paddingLeftGeneral: {
    paddingLeft: horizontalScale(37),
  },

  commonScrollViewPadding: {
    paddingBottom: verticalScale(50),
  },
  marginLeft5: {
    marginLeft: horizontalScale(5),
  },
  marginLeft9: {
    marginLeft: horizontalScale(9),
  },

  marginLeft15: {
    marginLeft: horizontalScale(15),
  },
  marginLeft25: {
    marginLeft: horizontalScale(25),
  },
  marginLeft30: {
    marginLeft: horizontalScale(30),
  },
  marginLeft50: {
    marginLeft: horizontalScale(50),
  },
  marginRight5: {
    marginRight: horizontalScale(5),
  },
  marginRight10: {
    marginRight: horizontalScale(10),
  },
  marginRight15: {
    marginRight: horizontalScale(15),
  },
  marginRight20: {
    marginRight: horizontalScale(20),
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  alignContentCenter: {
    alignContent: 'center',
  },

  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },

  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },

  alignSelf: {
    alignSelf: 'center',
  },

  textCenter: {
    textAlign: 'center',
  },

  height100: {
    height: '100%',
  },

  width49: {
    width: '49%',
  },

  width100: {
    width: '100%',
  },

  widthScreenWidth: {
    width: screenWidth,
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  justifySpaceBetween: {
    justifyContent: 'space-between',
  },

  /*-------------- Font Definitions -----------------*/

  FlanellaFont400: {
    fontFamily: 'Flanella',
  },

  RobotoFont100: {
    fontFamily: 'Roboto-Light',
  },

  RobotoFont300: {
    fontFamily: 'Roboto-Light',
  },

  RobotoFont400: {
    fontFamily: 'Roboto-Regular',
  },

  RobotoFont500: {
    fontFamily: 'Roboto-Medium',
  },

  RobotoFont700: {
    fontFamily: 'Roboto-Bold',
  },

  RobotoCondensedFont300: {
    fontFamily: 'RobotoCondensed-Light',
  },

  RobotoCondensedFont400: {
    fontFamily: 'RobotoCondensed-Regular',
  },

  RobotoCondensedFont700: {
    fontFamily: 'RobotoCondensed-Bold',
  },

  fontSize9: {
    fontSize: scaleFontSize(9),
  },

  fontSize10: {
    fontSize: scaleFontSize(10),
  },

  fontSize11: {
    fontSize: scaleFontSize(11),
  },

  fontSize12: {
    fontSize: scaleFontSize(12),
  },

  fontSize13: {
    fontSize: scaleFontSize(13),
  },

  fontSize14: {
    fontSize: scaleFontSize(14),
  },

  fontSize15: {
    fontSize: scaleFontSize(15),
  },

  fontSize16: {
    fontSize: scaleFontSize(16),
  },

  fontSize18: {
    fontSize: 18,
  },

  fontSize20: {
    fontSize: scaleFontSize(20),
  },

  logoFontDobule: {
    fontFamily: 'Flanella',
    fontSize: 70,
  },

  fontBodyTextStyle1: {
    fontFamily: 'Roboto-Thin',
    fontSize: 12,
    lineHeight: 14,
  },

  fontBodyTextStyle2: {
    fontFamily: 'Roboto-Thin',
    fontSize: 14,
  },

  titleSize27: {
    fontFamily: 'RobotoCondensed-Light',
    fontSize: 27,
  },

  /*-------------- Color Definitions -----------------*/

  bgWhite: {
    backgroundColor: allColors.white,
  },

  bgYellow: {
    backgroundColor: allColors.yellow,
  },

  bgTransparent: {
    backgroundColor: allColors.transparent,
  },

  borderLightGrey: {
    borderBottomColor: allColors.lightGreyBorder,
    borderBottomWidth: 1,
  },
  secondaryButtonBlack: {
    color: allColors.secondaryButtonBlack,
  },

  /* ----------- Common Header -----------------*/
  commonHeaderTransparent: {
    elevation: 0,
    shadowColor: allColors.transparent,
  },
  flagHeader: {
    marginLeft: horizontalScale(37),
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonHeaderText: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(14),
    fontWeight: '300',
  },

  /*-------------- Abosulte Views Definitions -----------------*/

  profileIconAbsolute: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  commonImageView: {
    marginTop: verticalScale(10),
    height: screenHeight * 0.465,
    width: screenWidth - horizontalScale(74),
    borderRadius: 10,
  },
  commonBorder: {
    borderWidth: 0.3,
    borderBottomWidth: 0,
    borderColor: allColors.borderBlack,
    borderRadius: 1,
  },
  /*-------------- Common Text Style Definitions -----------------*/
  commonTitleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: 'normal',
    fontSize: scaleFontSize(20),
    color: allColors.black,
  },
  commonRobotoText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
    opacity: 0.5,
    lineHeight: 16,
  },
  commonAddressText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(15),
  },
  commonPickerText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '300',
    fontSize: scaleFontSize(15),
    color: allColors.black,
    opacity: 0.5,
    lineHeight: 16,
  },
});
export default globalStyles;
