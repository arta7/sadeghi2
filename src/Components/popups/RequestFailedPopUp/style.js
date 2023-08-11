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
  failedText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
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
  paymentText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    color: allColors.black,
    lineHeight: 25,
  },
  viewContainer: {
    backgroundColor: allColors.white,
    borderRadius: 10,
    height: screenHeight * 0.4,
    width: screenWidth - horizontalScale(74),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
