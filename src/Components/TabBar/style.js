import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize, verticalPercentageScale} from '../../utility/Scale';

const styles = StyleSheet.create({
  borderView: {
    width: '100%',
    borderWidth: 0.4,
    borderColor: allColors.black,
  },
  dashView: {
    width: '100%',
    borderWidth: 0.4,
    opacity: 0.5,
    borderColor: '#00000050',
  },
  focusedText: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(20),
    color: allColors.black,
    marginBottom: 10,
    opacity: 0.3,
    fontWeight: '300',
  },
  mainTabBar: {
    flexDirection: 'row',
    height: verticalPercentageScale(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  unfocusedText: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(20),
    color: allColors.black,
    marginBottom: 10,
    fontWeight: '300',
  },
});
export default styles;
