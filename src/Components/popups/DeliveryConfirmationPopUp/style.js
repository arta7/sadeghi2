import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  screenHeight,
  screenWidth,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  descText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    color: allColors.black,
    lineHeight: 25,
    textAlign: 'center',
  },
  goText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(22),
    color: allColors.black,
  },
  goTouchView: {
    borderWidth: 1,
    borderRadius: 27.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(15),
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(50),
  },
  paddingView: {
    paddingHorizontal: horizontalScale(20),
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
    textAlign: 'center',
    marginTop: verticalScale(13),
  },
  viewContainer: {
    backgroundColor: allColors.white,
    borderRadius: 10,
    height: screenHeight * 0.45,
    width: screenWidth - horizontalScale(74),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
