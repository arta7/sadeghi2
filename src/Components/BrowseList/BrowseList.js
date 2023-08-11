import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ChevronRightIcon from '../icons/ChevronRightIcon/ChevronRightIcon';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const BrowseList = props => {
  //Render the browse list touchable items with title and right arrow on the right
  //side with separators below each one except for the last one
  return props.informationArray.map((item, index) => {
    return (
      <View key={index}>
        <TouchableOpacity
          key={'browse_list_' + index}
          onPress={() => props.onPress(item.title)}
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
            styles.container,
          ]}>
          {/*---- Title Start ---- */}
          <View key={index} style={globalStyles.flex}>
            <Text key={index} style={styles.title}>
              {item.title}
            </Text>
          </View>
          {/*---- Title End ---- */}
          <ChevronRightIcon />
        </TouchableOpacity>
        {/*---- Divider Start ---- */}
        {props.informationArray.length - 1 !== index && (
          <View style={styles.separator} />
        )}
        {/*---- Divider End ---- */}
      </View>
    );
  });
};

/*---- Default Props Start -------*/
BrowseList.defaultProps = {
  informationArray: [],
  onPress: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
BrowseList.propTypes = {
  informationArray: PropTypes.array,
  onPress: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default BrowseList;
