import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/constants';
import {
  scaleFontSize,
  horizontalScale,
  screenHeight,
  verticalScale,
} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';

const styles = StyleSheet.create({
  child: {
    paddingLeft: horizontalScale(26),
    paddingRight: horizontalScale(29),
    borderBottomWidth: 0.3,
    borderColor: allColors.borderBlack,
    paddingVertical: verticalScale(15),
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoBold,
    fontWeight: '700',
    color: allColors.black,
    fontSize: scaleFontSize(13),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: screenHeight * 0.076,
    paddingLeft: horizontalScale(26),
    paddingRight: horizontalScale(29),
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: allColors.borderBlack,
  },
  titleStyle: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    color: allColors.black,
    fontSize: scaleFontSize(18),
  },
});

export default styles;
