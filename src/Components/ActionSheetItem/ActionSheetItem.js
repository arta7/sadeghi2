import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utility
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const ActionSheetItem = props => {
  return (
    <View style={styles.mainView}>
      {/*------- Passed in left icon start --------*/}
      {props.leftIcon}
      {/*------- Passed in left icon end --------*/}

      {/*------- Action Item Title Start --------*/}
      <View style={globalStyles.flex}>
        <Text numberOfLines={1} style={styles.titleStyle}>
          {props.title}
        </Text>
      </View>
      {/*------- Action Item Title End --------*/}
    </View>
  );
};

/*---- Default Props Start -------*/
ActionSheetItem.defaultProps = {
  leftIcon: null,
  title: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
ActionSheetItem.propTypes = {
  leftIcon: PropTypes.object,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default ActionSheetItem;
