import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/constants';
import {
  scaleFontSize,
  screenHeight,
  screenWidth,
  horizontalScale,
  verticalScale,
} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';
const styles = StyleSheet.create({
  deliveryFee: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: 'normal',
    fontSize: scaleFontSize(16),
    color: allColors.ruby,
  },
  deliveryTimeText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  imageView: {
    width: screenWidth * 0.38,
    height: screenHeight * 0.22,
    borderWidth: 0.3,
    padding: 7,
    borderRadius: 10,
    borderColor: allColors.borderBlack,
  },
  mainView: {
    width: screenWidth * 0.38,
    marginRight: horizontalScale(10),
  },
  productIcon: {
    position: 'absolute',
    right: -2,
    top: -11.5,
    zIndex: 999,
  },
  rightIconStyle: {
    position: 'absolute',
    bottom: verticalScale(10),
    borderRadius: 5,
    padding: 4,
    right: horizontalScale(10),
    backgroundColor: allColors.white,
  },
  starIcon: {
    height: verticalScale(8),
    width: horizontalScale(8),
    alignSelf: 'flex-end',
    bottom: 2,
  },
  titleStyle: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: 'normal',
    fontSize: scaleFontSize(16),
    color: allColors.black
    ,textTransform: 'capitalize'
  },
});

export default styles;
