import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {
  horizontalScale,
  scaleFontSize,
  screenWidth,
  verticalScale,
} from '../../utility/Scale';

const styles = StyleSheet.create({
  cameraIcon: {
    marginLeft: horizontalScale(10),
    marginRight: horizontalScale(10),
  },
  container: {
    flexDirection: 'row',
    backgroundColor: allColors.white,
    width: screenWidth,
    paddingHorizontal: horizontalScale(21),
    alignItems: 'center',
    paddingVertical: verticalScale(5),
  },
  micIcon: {
    marginLeft: horizontalScale(17),
  },
  sendIcon: {
    marginLeft: horizontalScale(10),
  },
  textInputStyle: {
    fontSize: scaleFontSize(14),
    flex: 1,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: allColors.lightGreyText,
    paddingLeft: horizontalScale(10),
    paddingTop: verticalScale(10),
  },
});
export default styles;
