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
  orderSuccessText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(20),
    color: allColors.black,
    textAlign: 'center',
    marginTop: verticalScale(13),
  },
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
  touchButtons: {
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: verticalScale(15),
    marginRight: horizontalScale(5),
  },
  touchText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    textAlign: 'center',
  },
  paddingView: {
    paddingHorizontal: horizontalScale(20),
  },
});

export default styles;
