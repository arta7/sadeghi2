import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {isSmallDevice, scaleFontSize, verticalScale} from '../../utility/Scale';

const textFieldHeight = isSmallDevice
  ? 52
  : verticalScale(57) > 56
  ? 63
  : verticalScale(57) < 50
  ? 57
  : verticalScale(57);

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: allColors.white,
    height: textFieldHeight,
    width: '100%',
    borderRadius: textFieldHeight / 2,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
  },
  textInput: {
    flex: 1,
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: scaleFontSize(15),
    fontFamily: FONT_FAMILY.RobotoLight,
    height: textFieldHeight,
    width: '100%',
    color: allColors.black,
    fontWeight: '300',
    borderRadius: textFieldHeight / 2,
  },
});
export default styles;
