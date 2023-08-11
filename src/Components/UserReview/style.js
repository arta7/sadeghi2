import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/constants';
import {
  scaleFontSize,
  screenHeight,
  horizontalScale,
  verticalScale,
} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';
const styles = StyleSheet.create({
  borderView: {
    width: '100%',
    borderBottomWidth: 0.3,
    borderColor: allColors.borderBlack,
  },
  containerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(23),
    borderBottomColor: allColors.lightGreyBorder,
    borderBottomWidth: 2,
  },
  dataView: {
    marginLeft: horizontalScale(12),
  },
  imageStyle: {
    height: screenHeight * 0.0345,
    width: screenHeight * 0.0345,
    alignSelf: 'center',
    borderRadius: 3,
  },
  imageView: {
    height: screenHeight * 0.0345,
    width: screenHeight * 0.0345,
    borderRadius: 3,
    backgroundColor: allColors.white,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderRadius: 5,
  },
  marginView: {
    marginTop: verticalScale(2),
  },
  ratingText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(10),
    color: allColors.black,
  },
  reviewText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(11),
    color: allColors.black,
  },
  reviewTextView: {
    alignItems: 'center',
    paddingVertical: verticalScale(14),
    paddingHorizontal: horizontalScale(20),
  },
  usernameText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
});

export default styles;
