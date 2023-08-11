import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
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
    borderRadius: buttonHeight / 2,
    height: buttonHeight,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    textAlign: 'center',
  },
  circularIconStyle: {
    height: 14,
    width: 14,
  },
  circularViewStyle: {
    position: 'absolute',
    height: buttonHeight,
    width: buttonHeight,
    right: -1,
    bottom: 0,
    borderRadius: buttonHeight / 2,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    overflow: 'hidden',
  },
  shadowButton: {
    shadowColor: allColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  trailingIconStyle: {
    height: 12,
    width: 12,
  },
});
export default styles;
