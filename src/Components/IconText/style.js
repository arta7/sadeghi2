import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize} from '../../utility/Scale';

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.black,
    fontWeight: '300',
    fontSize: scaleFontSize(15),
  },
});
export default styles;
