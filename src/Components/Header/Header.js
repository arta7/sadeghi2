import React from 'react';
import {View, Text} from 'react-native';
import {Button, Body} from 'native-base';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './styles';
import {horizontalScale} from '../../utility/Scale';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ARROWLEFT from '../../assets/icons/generalIcons/arrowIcons/arrow_leftSVG.svg';
import MenuIcon from '../icons/MenuIcon/MenuIcon';

const HeaderApp = props => {
  let title;
  /*--Title Start--*/
  if (props.hasOwnProperty('title')) {
    title = (
      <Body>
        <Text style={globalStyles.commonHeaderText}>{props.title}</Text>
      </Body>
    );
  } else {
    title = null;
  }
  /*--Title End--*/

  /*--Delivery Address Start Start--*/
  let SelectDeliveryAddress;
  if (props.hasOwnProperty('SelectDeliveryAddress')) {
    SelectDeliveryAddress = (
      <View style={globalStyles.flex}>{props.SelectDeliveryAddress}</View>
    );
  }
  /*--Delivery Address Start End--*/

  return (
    <View style={[styles.mainHeader, globalStyles.horizontalGeneralPadding]}>
      {/*--Left Icon Start--*/}
      {props.leftIcon && (
        <View style={{marginRight: horizontalScale(20)}}>
          <Button onPress={() => props.onLeftIconPress()} transparent>
            {props.leftIcon}
          </Button>
        </View>
      )}
      {/*--Left Icon End--*/}

      {/*--Title Start--*/}
      {props.title ? title : null}
      {/*--Title End--*/}

      {/*--Delivery Address Start--*/}
      {props.SelectDeliveryAddress ? SelectDeliveryAddress : null}
      {/*--Delivery Address End--*/}

      {/*--Right Icon Start--*/}
      <View style={{marginLeft: horizontalScale(20)}}>
        <Button onPress={() => props.onRightIconPress()} transparent>
          {props.rightIcon}
        </Button>
      </View>
      {/*--Right Icon End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
HeaderApp.defaultProps = {
  leftIcon: <ARROWLEFT width={24} height={24} />,
  rightIcon: <MenuIcon />,
  title: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
HeaderApp.propTypes = {
  leftIcon: PropTypes.object,
  onLeftIconPress: PropTypes.func,
  onRightIconPress: PropTypes.func,
  rightIcon: PropTypes.object,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default HeaderApp;
