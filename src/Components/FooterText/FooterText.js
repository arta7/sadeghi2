import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import {allColors} from '../../assets/styles/mainColors';
import {verticalScale} from '../../utility/Scale';

const FooterText = props => {
  const containerStyle = {
    marginTop: verticalScale(props.componentTopPadding),
    marginBottom: verticalScale(props.componentBottomPadding),
    backgroundColor: allColors.transparent,
  };

  return (
    /*--- Footer Title Start --*/
    <View style={[globalStyles.alignItemsCenter, containerStyle]}>
      <Text
        style={[
          globalStyles.RobotoCondensedFont300,
          globalStyles.fontSize13,
          globalStyles.secondaryButtonBlack,
          {fontWeight: '300'},
        ]}>
        {props.title}
      </Text>
    </View>
    /*--- Footer Title End --*/
  );
};

/*---- Default Props Start -------*/
FooterText.defaultProps = {
  componentBottomPadding: 0,
  componentTopPadding: 0,
  title: null,
};
/*---- Default Props Start -------*/

/*---- Prop Type Expectations Start -------*/
FooterText.propTypes = {
  componentBottomPadding: PropTypes.number,
  componentTopPadding: PropTypes.number,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default FooterText;
