import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

//Components
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const GoogleInfoPin = props => {
  return (
    <View style={styles.mainContainer}>
      {/*--Image Start--*/}
      <View style={styles.imageContainer}>
        <FastImage
          source={{uri: props.imagePath}}
          style={[globalStyles.flex]}
        />
      </View>
      {/*--Image End--*/}

      <View style={styles.descriptionView}>
        {/*--Title Start--*/}
        <Text style={styles.titleText}>{props.title}</Text>
        {/*--Title End--*/}

        {/*--Address Start--*/}
        <Text numberOfLines={3} style={styles.addressText}>
          {props.address}
        </Text>
        {/*--Address End--*/}

        {/*--Rating Start--*/}
        {props.showRatingView && (
          <ReviewDisplay
            rating={props.rating}
            ratingNum={props.ratingNum}
            isDescriptionShown={true}
          />
        )}
        {/*--Rating End--*/}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
GoogleInfoPin.defaultProps = {
  address: '',
  imagePath: null,
  rating: 0,
  ratingNum: 0,
  showRatingView: false,
  title: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
GoogleInfoPin.propTypes = {
  address: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
  ratingNum: PropTypes.number,
  showRatingView: PropTypes.bool,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default GoogleInfoPin;
