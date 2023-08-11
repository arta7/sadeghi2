import {StyleSheet} from 'react-native';
import {isSmallDevice, verticalScale} from '../../utility/Scale';

const buttonHeight = isSmallDevice
  ? 52
  : verticalScale(57) > 56
  ? 63
  : verticalScale(57) < 50
  ? 57
  : verticalScale(57);

const styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 5,
    height: buttonHeight,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    textAlign: 'center',
  },
});
export default styles;
