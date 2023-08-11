import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utility/Scale';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize, screenHeight} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';
const styles = StyleSheet.create({
  deliveryFee: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: 'normal',
    fontSize: scaleFontSize(12),
    color: allColors.ruby,
    marginLeft: horizontalScale(5),
  },
  deliveryTimeText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(11),
    color: allColors.black,
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  imageView: {
    width: '100%',
    height: screenHeight * 0.25,
    borderRadius: 5,
  },
  mainView: {
    width: '100%',
    alignSelf: 'center',
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
    color: allColors.black,
  },
});

export default styles;
