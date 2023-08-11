import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize} from '../../utility/Scale';

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionStyle: {
    fontFamily: FONT_FAMILY.RobotoThin,
    color: allColors.black,
    fontSize: scaleFontSize(12),
    fontWeight: '100',
  },
  titleStyle: {
    color: allColors.black,
    fontSize: scaleFontSize(20),
  },
});
export default styles;
