import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize, horizontalScale} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingLeft: horizontalScale(20),
    height: '100%',
    borderWidth: 0.3,
    borderColor: '#cecece',
  },
  titleStyle: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    color: allColors.black,
    fontSize: scaleFontSize(18),
    marginLeft: horizontalScale(20),
    marginRight: horizontalScale(5),
  },
});

export default styles;
