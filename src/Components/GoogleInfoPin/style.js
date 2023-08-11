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
  addressText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(9),
    color: allColors.black,
    marginTop: verticalScale(2),
    flex: 1,
  },
  descriptionView: {
    marginLeft: horizontalScale(10),
    flex: 1,
  },
  imageContainer: {
    height: 53,
    width: 53,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    width: screenWidth * 0.5,
    flex: 1,
  },
  titleText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(13),
    color: allColors.black,
  },
});
export default styles;
