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
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(11),
    color: allColors.black,
  },
  iconImage: {
    borderRadius: 15,
  },
  imageView: {
    height: screenHeight * 0.081,
    width: screenWidth * 0.21,
  },
  itemNumText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  mainView: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(15),
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderRadius: 5,
  },
  moreDescriptionText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(11),
    color: allColors.black,
  },
  starIcon: {
    height: verticalScale(8),
    width: horizontalScale(8),
    alignSelf: 'flex-end',
    bottom: 2,
  },
  titleStyle: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
    marginRight: horizontalScale(5),
  },
});

export default styles;
