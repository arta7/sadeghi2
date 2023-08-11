import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize, screenWidth} from '../../utility/Scale';

const styles = StyleSheet.create({
  activeBorder: {
    height: screenWidth * 0.03,
    width: screenWidth * 0.03,
    borderRadius: (screenWidth * 0.03) / 2,
    backgroundColor: allColors.yellow,
  },
  containerStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  inactiveBorder: {
    height: screenWidth * 0.055,
    width: screenWidth * 0.055,
    borderRadius: (screenWidth * 0.055) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: allColors.placeholderColor,
    padding: 5,
  },
  radioTitle: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontSize: scaleFontSize(13),
    fontWeight: '100',
    color: allColors.black,
  },
});
export default styles;
