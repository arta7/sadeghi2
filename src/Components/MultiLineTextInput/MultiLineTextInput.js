import React from 'react';
import {TextInput} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {screenHeight} from '../../utility/Scale';

const MultiLineTextInput = props => {
  return (
    <TextInput
      style={[styles.textInput, {height: props.height}]}
      underlineColorAndroid="transparent"
      onChangeText={text => props.onChange(text)}
      selectionColor={allColors.black}
      {...props}
      placeholderTextColor={allColors.placeholderColor}
      autoCorrect={false}
      multiline={true}
      textAlignVertical={'top'}
    />
  );
};

/*---- Default Props Start -------*/
MultiLineTextInput.defaultProps = {
  height: screenHeight * 0.207,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
MultiLineTextInput.propTypes = {
  height: PropTypes.number,
  onChange: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/

export default MultiLineTextInput;
