import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  isSmallDevice,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';

const textFieldHeight = isSmallDevice
  ? 52
  : verticalScale(57) > 56
  ? 63
  : verticalScale(57) < 50
  ? 57
  : verticalScale(57);

const styles = StyleSheet.create({
  codeTextStyle: {
    marginLeft: horizontalScale(-20),
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.grey,
    fontSize: scaleFontSize(15),
    fontWeight: '300',
  },
  containerStyle: {
    backgroundColor: allColors.transparent,
    justifyContent: 'center',
    height: '100%',
  },
  mainContainerStyle: {
    height: textFieldHeight,
    width: '100%',
    borderRadius: textFieldHeight / 2,
    overflow: 'hidden',
    borderWidth: 0.3,
    borderColor: '#00000050',
    justifyContent: 'center',
  },
  textContainerStyle: {
    flex: 1,
    backgroundColor: allColors.transparent,
  },
  textInputStyle: {
    color: allColors.black,
    fontSize: scaleFontSize(15),
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    padding: 0,
  },
});
export default styles;
