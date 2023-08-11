import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {horizontalScale, scaleFontSize} from '../../utility/Scale';

const TitleWithSideIcons = props => {
  //title styles
  const titleCommonStyle = {
    fontSize: scaleFontSize(props.titleFontSize),
    fontWeight: props.titleFontWeight,
  };

  //container styles
  const containerStyle = {
    marginTop: props.containerTopPadding,
    marginBottom: props.containerBottomPadding,
    alignItems: 'center',
  };

  return (
    <View style={[containerStyle, globalStyles.flexDirectionRow]}>
      {/*--Left Icon Start--*/}
      {props.leftIcon && (
        <View style={globalStyles.marginRight15}>{props.leftIcon}</View>
      )}
      {/*--Left Icon End--*/}

      {/*--Title Start--*/}
      {props.title && (
        <Text style={[styles.titleStyle, titleCommonStyle]}>{props.title}</Text>
      )}
      {/*--Title End--*/}

      {/*--Right Icon Start--*/}
      {props.rightIconComponentsArray.length > 0 &&
        props.rightIconComponentsArray.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => props.iconOnPress(item.functionName)}
              key={'title_with_side_right_icon' + index}
              style={{marginLeft: index === 0 ? 0 : horizontalScale(27)}}>
              {item.component}
            </TouchableOpacity>
          );
        })}
      {/*--Right Icon End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
TitleWithSideIcons.defaultProps = {
  containerBottomPadding: 0,
  containerTopPadding: 0,
  iconOnPress: () => alert('Done'),
  leftIcon: null,
  rightIconComponentsArray: [],
  title: null,
  titleFontSize: 25,
  titleFontWeight: 'normal',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
TitleWithSideIcons.propTypes = {
  containerBottomPadding: PropTypes.number,
  containerTopPadding: PropTypes.number,
  iconOnPress: PropTypes.func,
  leftIcon: PropTypes.object,
  rightIconComponentsArray: PropTypes.array,
  title: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontWeight: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default TitleWithSideIcons;
