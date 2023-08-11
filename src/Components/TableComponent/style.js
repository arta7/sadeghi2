import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize, verticalScale} from '../../utility/Scale';

const styles = StyleSheet.create({
  borderView: {
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderRadius: 5,
  },
  columnText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(16),
    color: allColors.black,
  },
  dashView: {
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderColor: allColors.black,
  },
  flatListView: {
    flexDirection: 'row',
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(18),
    borderColor: allColors.borderBlack,
  },
  maxWidthView: {
    maxWidth: '30%',
  },
  rowText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
});

export default styles;
