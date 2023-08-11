import React from 'react';
import {View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import {allColors} from '../../assets/styles/mainColors';
import {verticalScale} from '../../utility/Scale';

const BorderDivider = props => {
  /*---- Main Styles for the whole component start ----*/
  const mainContainerStyle = {
    marginTop: verticalScale(props.containerTopMargin),
    marginBottom: verticalScale(props.containerBottomMargin),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  };
  /*---- Main Styles for the whole component end ----*/

  /*---- Styles for the active part of the border start ----*/
  const activeViewCommonStyle = {
    height: props.activeAreaHeight,
    width: props.activeAreaWidth,
    backgroundColor: props.activeAreaColor,
    position: 'absolute',
    right: props.activeAreaAlignment === 'right' ? 0 : null,
  };
  /*---- Styles for the active part of the border end ----*/

  /*---- Styles for the inactive part of the border start ----*/
  const nonActiveCommonStyle = {
    width: '100%',
    height: props.activeAreaHeight,
    backgroundColor: allColors.lightGreyText,
    flex: 1,
  };
  /*---- Styles for the inactive part of the border end ----*/

  /*---Render the divider-----*/
  return (
    <View style={mainContainerStyle}>
      {!props.isActiveOnly && <View style={nonActiveCommonStyle} />}
      <View style={activeViewCommonStyle} />
    </View>
  );
};

/*---- Default Props Start -------*/
BorderDivider.defaultProps = {
  activeAreaAlignment: 'left',
  activeAreaColor: allColors.yellow,
  activeAreaHeight: 1,
  activeAreaWidth: 68,
  containerBottomMargin: 20,
  containerTopMargin: 11,
  isActiveOnly: false,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
BorderDivider.propTypes = {
  activeAreaAlignment: PropTypes.string,
  activeAreaColor: PropTypes.string,
  activeAreaHeight: PropTypes.number,
  activeAreaWidth: PropTypes.number,
  containerBottomMargin: PropTypes.number,
  containerTopMargin: PropTypes.number,
  isActiveOnly: PropTypes.bool,
};
/*---- Prop Type Expectations End -------*/
export default BorderDivider;
