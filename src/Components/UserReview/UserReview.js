import React from 'react';
import {Text, View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Component
import CachableImage from '../CachableImage/CachableImage';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const UserReview = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.containerView}>
        {/*--User Image Start--*/}
        <View style={styles.imageView}>
          <CachableImage
            style={styles.imageStyle}
            source={{uri: props.imagePath}}
          />
        </View>
        {/*--User Image End--*/}

        <View style={styles.dataView}>
          {/*--Name Start--*/}
          <Text style={styles.usernameText}>{props.userName}</Text>
          {/*--Name End--*/}

          <View style={[globalStyles.flexDirectionRow, styles.marginView]}>
            {/*--Date Start--*/}
            <Text style={styles.ratingText}>{props.ratingDate + ' / '}</Text>
            {/*--Date End--*/}

            {/*--Review Start--*/}
            <ReviewDisplay rating={props.rating} isDescriptionShown={false} />
            {/*--Review End--*/}
          </View>
        </View>
      </View>
      <View style={styles.borderView} />

      {/*--Review Text Start--*/}
      <View style={styles.reviewTextView}>
        <Text style={styles.reviewText}>{props.reviewText}</Text>
      </View>
      {/*--Review Text End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
UserReview.defaultProps = {
  imagePath: '',
  rating: 0,
  ratingDate: '',
  reviewText: '',
  userName: '',
};
/*---- Default Props End -------*/

UserReview.propTypes = {
  imagePath: PropTypes.string,
  rating: PropTypes.number,
  ratingDate: PropTypes.string,
  reviewText: PropTypes.string,
  userName: PropTypes.string,
};

export default UserReview;
