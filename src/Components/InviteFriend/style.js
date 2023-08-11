import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utility/Scale';

const styles = StyleSheet.create({
  dateText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  dateView: {
    marginRight: horizontalScale(17),
  },
  inviteCodeText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    color: allColors.black,
    flex: 1,
  },
  inviteCodeTitle: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  mainContainer: {
    paddingVertical: verticalScale(10),
  },
  moneyGainedText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(15),
    color: allColors.strongBlue,
  },
  nameText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  nameView: {
    marginLeft: horizontalScale(11),
    flex: 1,
    marginRight: horizontalScale(5),
  },
  profileView: {
    marginLeft: horizontalScale(18),
  },
});
export default styles;
