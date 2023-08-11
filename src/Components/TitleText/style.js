import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize, verticalScale} from '../../utility/Scale';

const styles = StyleSheet.create({
  descriptionStyle: {
    fontFamily: FONT_FAMILY.RobotoThin,
    color: allColors.black,
    fontSize: scaleFontSize(13),
    marginTop: verticalScale(6),
  },
  titleStyle: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    color: allColors.black,
  },
});
export default styles;
