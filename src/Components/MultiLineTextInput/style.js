import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: horizontalScale(18),
    paddingTop: verticalScale(18),
    fontSize: scaleFontSize(15),
    fontFamily: FONT_FAMILY.RobotoLight,
    width: '100%',
    color: allColors.black,
    fontWeight: '300',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
  },
});
export default styles;
