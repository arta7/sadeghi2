import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {scaleFontSize, verticalScale} from '../../utility/Scale';

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(7),
    alignItems: 'center',
  },
  borderImage: {
    height: 201,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderRadius: 6,
  },
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  doNotText: {
    textAlign: 'center',
    marginTop: verticalScale(5),
    color: allColors.ruby,
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
  },
  signatureView: {
    height: 190,
    width: '95%',
  },
  signatureText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
});
export default styles;
