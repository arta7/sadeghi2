import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/constants';
import {
  scaleFontSize,
  screenHeight,
  horizontalScale,
} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';

const styles = StyleSheet.create({
  container: {
    height: 85,
    borderWidth: 0.3,
    width: '100%',
    borderColor: allColors.borderBlack,
    borderRadius: 10,
    justifyContent: 'center',
  },
  deliveryFee: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: 'bold',
    fontSize: scaleFontSize(13),
    color: allColors.ruby,
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
  imageContainer: {
    height: 55,
    width: 55,
    marginRight: horizontalScale(16),
  },
  imageIcon: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  leftProductIcon: {
    position: 'absolute',
    left: 0,
    top: -1,
  },
  productIcon: {
    position: 'absolute',
    right: 0,
    top: -9,
  },
  rateSectionView: {
    height: 34,
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    borderTopWidth: 0,
    backgroundColor: 'rgba(255, 184, 0, 0.02)',
  },
  sectionBorderView: {
    borderLeftWidth: 0.5,
    borderColor: allColors.borderBlack,
  },
  sectionText: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: 'normal',
    fontSize: scaleFontSize(14),
    color: allColors.black,
  },
  sectionView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  subContainer: {
    marginLeft: horizontalScale(16),
    marginRight: horizontalScale(21),
  },
  title: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: 'normal',
    fontSize: scaleFontSize(13),
    color: allColors.black,
  },
  totalCountView: {
    height: screenHeight * 0.031,
    width: screenHeight * 0.031,
    borderWidth: 0.5,
    borderColor: allColors.borderBlack,
    borderRadius: (screenHeight * 0.031) / 2,
    alignSelf: 'center',
    marginRight: horizontalScale(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalCountText: {
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: allColors.black,
  },
});

export default styles;
