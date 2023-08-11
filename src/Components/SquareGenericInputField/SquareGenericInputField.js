import React from 'react';
import {View, TextInput} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale} from '../../utility/Scale';

const SquareGenericInputField = props => {
  let {backgroundColor, ...textFieldProp} = props;

  //image container style
  const imageContainerCommonStyle = {
    paddingLeft: horizontalScale(props.rightIconPaddingLeft),
    paddingRight: horizontalScale(props.rightIconPaddingRight),
  };

  //container style
  const containerStyle = {
    width: props.width,
  };

  return (
    <View style={[containerStyle]}>
      <View style={[styles.sectionStyle, {backgroundColor: backgroundColor}]}>
        {/*--Square Text Input Start--*/}
        <TextInput
          style={[
            styles.textInput,
            {
              paddingLeft: horizontalScale(15),
            },
          ]}
          underlineColorAndroid="transparent"
          onChangeText={text => props.onChange(text)}
          selectionColor={allColors.black}
          keyboardType={props.keyboardType}
          {...textFieldProp}
          placeholderTextColor={allColors.placeholderColor}
        />
        {/*--Square Text Input End--*/}

        {/*--Right Icon Start--*/}
        {props.rightIconComponent && (
          <View
            style={[
              imageContainerCommonStyle,
              {backgroundColor: backgroundColor},
            ]}>
            {props.rightIconComponent}
          </View>
        )}
        {/*--Right Icon End--*/}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
SquareGenericInputField.defaultProps = {
  backgroundColor: allColors.white,
  cardValidation: false,
  keyboardType: 'default',
  largeTextBox: true,
  rightIconComponent: null,
  rightIconPaddingLeft: horizontalScale(10),
  rightIconPaddingRight: horizontalScale(10),
  selectedValue: '',
  width: '100%',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
SquareGenericInputField.propTypes = {
  backgroundColor: PropTypes.string,
  cardValidation: PropTypes.bool,
  keyboardType: PropTypes.string,
  largeTextBox: PropTypes.bool,
  onChange: PropTypes.func,
  rightIconComponent: PropTypes.object,
  rightIconPaddingLeft: PropTypes.number,
  rightIconPaddingRight: PropTypes.number,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
/*---- Prop Type Expectations End -------*/

export default SquareGenericInputField;
