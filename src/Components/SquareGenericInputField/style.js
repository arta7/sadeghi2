import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {isSmallDevice, scaleFontSize, verticalScale} from '../../utility/Scale';

const textFieldHeight = isSmallDevice
  ? 60
  : verticalScale(73) > 60
  ? 69
  : verticalScale(73) < 65
  ? 74
  : verticalScale(73);

const styles = StyleSheet.create({
  downArrow: {
    position: 'absolute',
    right: 0,
  },
  pickerHeightStyle: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
  pickerStyle: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: textFieldHeight,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
  },
  pickerTextStyle: {
    padding: 0,
    fontSize: scaleFontSize(16),
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '100',
    color: allColors.black,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: allColors.white,
    height: textFieldHeight,
    width: '100%',
    borderRadius: 5,
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
    borderRadius: 5,
  },
});
export default styles;
