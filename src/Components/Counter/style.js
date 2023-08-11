import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {horizontalScale} from '../../utility/Scale';

const style = StyleSheet.create({
  commonButtonView: {
    height: 10,
    width: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    color: allColors.black,
    marginHorizontal: horizontalScale(7),
  },
});
export default style;
