import React from 'react';
import {View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import {allColors} from '../../assets/styles/mainColors';

const InteractiveStar = props => {
  return (
    <View>
      <View
        style={[
          globalStyles.flexDirectionRow,
          {justifyContent: 'space-between'},
        ]}>
        {/* --- Star Rating Start --*/}
        <StarRating
          maxStars={5}
          rating={props.value}
          fullStarColor={allColors.yellow}
          starSize={20}
          containerStyle={{justifyContent: 'flex-start'}}
          starStyle={{marginRight: 3}}
          selectedStar={rating => props.onStarPress(rating)}
        />
        {/* --- Star Rating End --*/}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
InteractiveStar.defaultProps = {
  value: 0,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
InteractiveStar.propTypes = {
  onStarPress: PropTypes.func,
  value: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/
export default InteractiveStar;
