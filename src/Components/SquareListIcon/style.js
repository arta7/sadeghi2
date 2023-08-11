import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {isSmallDevice, verticalScale} from '../../utility/Scale';

const textFieldHeight = isSmallDevice
  ? 60
  : verticalScale(73) > 60
  ? 69
  : verticalScale(73) < 65
  ? 74
  : verticalScale(73);

const styles = StyleSheet.create({
  borderImage: {
    height: textFieldHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    backgroundColor: 'rgba(248, 248, 248, 0.42)',
  },
});
export default styles;
