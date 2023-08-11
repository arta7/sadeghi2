import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize, verticalScale} from '../../utility/Scale';

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
  },
  separator: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: allColors.borderBlack,
    opacity: 0.5,
  },
  title: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(15),
    color: allColors.black,
    fontWeight: '300',
  },
});
export default styles;
