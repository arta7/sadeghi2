import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Component
import CachableImage from '../CachableImage/CachableImage';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import * as images from '../../assets/images/map';
import {horizontalScale, verticalScale} from '../../utility/Scale';

const SingleFoodItemInfo = props => {
  return (
    <View style={styles.mainView}>
      {/* --- Top Right Icon Start --*/}
      <TouchableOpacity
        onPress={() => props.onTopRightIconPress && props.onTopRightIconPress()}
        style={styles.productIcon}>
        {props.topRightIconComponent && props.topRightIconComponent}
      </TouchableOpacity>
      {/* --- Top Right Icon End --*/}

      <TouchableOpacity onPress={() => props.onPress && props.onPress()}>
        <View style={styles.imageView}>
          {/*--Small Restaurant Image Start--*/}
          <CachableImage
            source={{uri: props.imageIconPath}}

            // source={require('../../assets/placeholders/20x20.png')}
              style={[globalStyles.flex, {borderRadius: 10}]}
            resizeMode={'stretch'}
          />
          {/*--Small Restaurant Image End--*/}

          {/*--Add to Cart Icon Start--*/}
          {props.isAddToCartVisible && (
            <TouchableOpacity
              onPress={() => props.addToCartOnPress()}
              style={styles.rightIconStyle}>
              <Image
                style={{
                  width: horizontalScale(20),
                  height: verticalScale(20),
                  borderRadius: 3,
                }}
                source={require('../../assets/placeholders/20x20.png')}
              />
            </TouchableOpacity>
          )}
          {/*--Add to Cart Icon End--*/}
        </View>
        <View
          View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.marginTop5,
            globalStyles.alignItemsCenter,
          ]}>
          <View
            style={[
             // globalStyles.flexDirectionRow,
              globalStyles.flex,
              globalStyles.alignItemsCenter,
            ]}>
            {/*--Title Start--*/}
            <View style={globalStyles.flex}>
              <Text numberOfLines={1} style={styles.titleStyle}>
                {props.title}
              </Text>
            </View>
            {/*--Title End--*/}

            {/*--Delivery Fee Start--*/}
            {/* <Text style={styles.deliveryFee}>{props.deliveryFee}</Text> */}
            {/*--Delivery Fee End--*/}
          </View>
        </View>
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
            {marginTop: 3},
          ]}>
          <View style={globalStyles.flexDirectionRow}>
            <Text style={styles.deliveryTimeText}>{props.deliveryTime}</Text>
            {/*--Delivery Description Start--*/}
            {/* <Text style={styles.descriptionText}>{' - Delivery / '}</Text> */}
            {/*--Delivery Description End--*/}

            {/*--Rating Start--*/}
            {/* <Text style={styles.descriptionText}>{props.rating}</Text> */}
            {/*--Rating End--*/}

            {/*--Star Icon Start--*/}
            {/* <Image
              source={images.generalIcons.starIcon}
              style={styles.starIcon}
              resizeMode={'contain'}
            /> */}
            {/*--Star Icon End Start--*/}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

/*---- Default Props Start -------*/
SingleFoodItemInfo.defaultProps = {
  deliveryFee: '0',
  deliveryTime: '',
  description: '',
  imageIconPath: '',
  isAddToCartVisible: false,
  rating: 0,
  title: '',
  topRightIconComponent: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
SingleFoodItemInfo.propTypes = {
  addToCartOnPress: PropTypes.func,
  deliveryFee: PropTypes.string,
  deliveryTime: PropTypes.string,
  description: PropTypes.string,
  imageIconPath: PropTypes.string,
  isAddToCartVisible: PropTypes.bool,
  onPress: PropTypes.func,
  onTopRightIconPress: PropTypes.func,
  rating: PropTypes.number,
  title: PropTypes.string,
  topRightIconComponent: PropTypes.object,
};
/*---- Prop Type Expectations End -------*/
export default SingleFoodItemInfo;
