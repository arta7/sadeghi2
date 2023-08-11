import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale, verticalScale} from '../../utility/Scale';

//Publicly Available Icons that Can be Used for Commercial Purposes
import Search from '../../assets/icons/discoverMenuIcons/searchSVG.svg';

const SearchBoxWithRightIcon = props => {
  let textFieldProp = props;

  const containerCommonStyle = {
    marginTop: verticalScale(props.containerMarginTop),
    marginBottom: verticalScale(props.containerMarginBottom),
  };

  return (
    <View style={[containerCommonStyle, styles.mainContainer]}>
      {/*--Search Container Start--*/}
      <View style={styles.section}>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          selectionColor={allColors.black}
          placeholderTextColor={allColors.black}
          autoCorrect={false}
          autoFocus
          {...textFieldProp}
        />
        <TouchableOpacity onPress={() => props.onSearchIconClick()}>
          <Search height={30} width={30} />
        </TouchableOpacity>
      </View>
      {/*--Search Container End--*/}

      {/*--Right Icon Start--*/}
      <TouchableOpacity onPress={() => props.onPressRightIcon()}>
        {props.rightIconComponent}
      </TouchableOpacity>
      {/*--Right Icon End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
SearchBoxWithRightIcon.defaultProps = {
  containerMarginBottom: 0,
  containerMarginTop: 0,
  imageLeftPadding: horizontalScale(10),
  imageRightPadding: horizontalScale(10),
  onSearchIconClick: () => alert('Done'),
  rightIconComponent: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
SearchBoxWithRightIcon.propTypes = {
  containerMarginBottom: PropTypes.number,
  containerMarginTop: PropTypes.number,
  imageLeftPadding: PropTypes.number,
  imageRightPadding: PropTypes.number,
  onChange: PropTypes.func,
  onPressRightIcon: PropTypes.func,
  onSearchIconClick: PropTypes.func,
  rightIconComponent: PropTypes.object,
};
/*---- Prop Type Expectations End -------*/
export default SearchBoxWithRightIcon;
