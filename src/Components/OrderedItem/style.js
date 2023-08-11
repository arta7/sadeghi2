import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  screenWidth,
  verticalScale,
} from '../../utility/Scale';

const styles = StyleSheet.create({
  amountToPayText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
    flex: 1,
  },
  dateText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(12),
    color: allColors.black,
    flex: 1,
  },
  imageView: {
    height: screenWidth * 0.1,
    width: screenWidth * 0.1,
    borderRadius: (screenWidth * 0.1) / 2,
  },
  inviteCodeText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    color: allColors.black,
    flex: 1,
    textDecorationLine: 'underline',
  },
  inviteCodeTitle: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  mainContainer: {
    paddingTop: verticalScale(21),
    paddingBottom: verticalScale(18),
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderRadius: 10,
    padding: 5,
  },
  nameText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  nameView: {
    marginLeft: horizontalScale(11),
    flex: 1,
    marginRight: horizontalScale(5),
  },
  profileView: {
    marginLeft: horizontalScale(18),
    height: screenWidth * 0.12,
    width: screenWidth * 0.12,
    borderRadius: (screenWidth * 0.12) / 2,
    borderWidth: 0.3,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceView: {
    marginRight: horizontalScale(20),
    height: '100%',
    alignItems: 'center',
  },
});
export default styles;
