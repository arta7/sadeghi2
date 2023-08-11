import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const IconText = props => {
  return (
    <View
      style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
      {/*--Left Icon Start--*/}
      {props.leftIconComponent && (
        <View style={globalStyles.marginRight15}>
          {props.leftIconComponent}
        </View>
      )}
      {/*--Left Icon End--*/}

      {/*--Title Start--*/}
      {props.title && (
        <View style={globalStyles.flex}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      )}
      {/*--Title Start--*/}

      {/*--Right Icon Start--*/}
      {props.rightIconComponent && (
        <View style={globalStyles.marginLeft15}>
          {props.rightIconComponent}
        </View>
      )}
      {/*--Right Icon End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
IconText.defaultProps = {
  leftIconComponent: null,
  rightIconComponent: null,
  title: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
IconText.propTypes = {
  leftIconComponent: PropTypes.object,
  rightIconComponent: PropTypes.object,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default IconText;
