import React from 'react';
import {View, TextInput} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale} from '../../utility/Scale';
import {TEXTFIELD_TYPE} from '../../constants/constants';

const GenericInputField = props => {
  let textFieldProp = props;

  //check if the entry is password
  const isSecureEntry = props.type === TEXTFIELD_TYPE.PASSWORD;
  //check if entry is email
  const returnKeyboardType =
    props.type === TEXTFIELD_TYPE.EMAIL ? 'email-address' : 'default';

  //create image container styles
  const imageContainerCommonStyle = {
    paddingLeft: horizontalScale(props.imageLeftPadding),
    paddingRight: horizontalScale(props.imageRightPadding),
  };

  return (
    <View style={styles.section}>
      {/*--Left Icon Start --*/}
      {props.iconComponent && (
        <View style={[imageContainerCommonStyle]}>{props.iconComponent}</View>
      )}
      {/*--Left Icon End --*/}

      {/*--Input Field Start --*/}
      <TextInput
        style={[
          styles.textInput,
          {paddingLeft: props.iconComponent ? 0 : horizontalScale(30)},
        ]}
        underlineColorAndroid="transparent"
        secureTextEntry={isSecureEntry}
        keyboardType={returnKeyboardType}
        onChangeText={text => props.onChange(text)}
        selectionColor={allColors.black}
        {...textFieldProp}
        placeholderTextColor={allColors.placeholderColor}
        autoCorrect={false}
      />
      {/*--Input Field End --*/}
    </View>
  );
};

/*---- Default Props Start -------*/
GenericInputField.defaultProps = {
  iconComponent: null,
  imageLeftPadding: horizontalScale(10),
  imageRightPadding: horizontalScale(10),
  type: TEXTFIELD_TYPE.NORMAL,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
GenericInputField.propTypes = {
  iconComponent: PropTypes.object,
  imageLeftPadding: PropTypes.number,
  imageRightPadding: PropTypes.number,
  onChange: PropTypes.func,
  type: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/

export default GenericInputField;
