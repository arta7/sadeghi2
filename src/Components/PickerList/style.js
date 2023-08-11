import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  screenHeight,
} from '../../utility/Scale';

const PADDING = 10;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.25,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: allColors.white,
    bottom: 10,
  },
  mainContainer: {
    width: 70,
    height: 65,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  modalStyle: {
    borderRadius: 8,
    bottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    justifyContent: 'flex-end',
  },
  optionStyle: {
    padding: PADDING,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE,
    color: HIGHLIGHT_COLOR,
  },
  textStyle: {
    fontSize: scaleFontSize(15),
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.black,
    fontWeight: '300',
    marginRight: horizontalScale(8),
  },
});
export default styles;
