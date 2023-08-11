import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  screenWidth,
  verticalScale,
} from '../../utility/Scale';

const styles = StyleSheet.create({
  dateText: {
    alignSelf: 'flex-end',
    color: allColors.black,
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(10),
    fontWeight: '300',
    opacity: 0.5,
  },
  leftDateView: {
    marginLeft: horizontalScale(5),
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  messageContainer: {
    marginHorizontal: horizontalScale(30),
    marginBottom: verticalScale(20),
    flexDirection: 'row',
  },
  messageToLeft: {
    maxWidth: screenWidth * 0.6,
    minWidth: 70,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(22),
  },
  messageToRight: {
    maxWidth: screenWidth * 0.6,
    minWidth: 70,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(22),
  },
  onlineView: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'lightgreen',
    alignSelf: 'flex-end',
    bottom: -5,
  },
  photoLeft: {
    marginLeft: horizontalScale(10),
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  photoRight: {
    marginRight: horizontalScale(10),
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  positionToLeft: {
    justifyContent: 'flex-start',
  },
  positionToRight: {
    justifyContent: 'flex-end',
  },
  profileImage: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  rightDateView: {
    marginRight: horizontalScale(5),
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  textToLeft: {
    alignSelf: 'flex-start',
    color: allColors.black,
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontSize: scaleFontSize(14),
    fontWeight: 'normal',
  },
  textToRight: {
    alignSelf: 'flex-end',
    color: allColors.white,
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontSize: scaleFontSize(14),
    fontWeight: 'normal',
  },
});
export default styles;
