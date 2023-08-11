import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  screenWidth,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  orderSuccessMessageText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    color: allColors.black,
    textAlign: 'center',
    lineHeight: 25,
  },
  viewContainer: {
    backgroundColor: allColors.white,
    borderRadius: 10,
    paddingVertical: verticalScale(50),
    width: screenWidth - horizontalScale(74),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderSuccessText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
    textAlign: 'center',
    marginTop: verticalScale(13),
  },
  paddingView: {
    paddingHorizontal: horizontalScale(20),
  },
});

export default styles;
