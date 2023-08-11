import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {verticalScale} from '../../utility/Scale';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RadioButton = props => {
  const radioArray = props.optionArr;
  return (
    <View style={globalStyles.width100}>
      {radioArray.map((radioItem, index) => {
        //component is to the right of the radio button
        if (props.align === 'right') {
          return (
            <TouchableOpacity
              onPress={() =>
                props.onItemSelection && props.onItemSelection(radioItem.id)
              }
              key={'radio_button_ ' + index}
              style={[
                styles.containerStyle,
                {
                  marginBottom:
                    index === radioArray.length - 1
                      ? 0
                      : verticalScale(props.paddingBottom),
                },
              ]}>
              <View style={globalStyles.flex}>
                {radioItem.component && radioItem.component}
              </View>
              <View style={{marginLeft: props.alignmentPaddingSize}}>
                <View style={styles.inactiveBorder}>
                  {radioItem.isActive && <View style={styles.activeBorder} />}
                </View>
              </View>
            </TouchableOpacity>
          );
        }
        //component is on the top of the radio button
        else if (props.align === 'top') {
          return (
            <View
              style={{
                marginBottom:
                  index === radioArray.length - 1
                    ? 0
                    : verticalScale(props.paddingBottom),
              }}
              key={'RadioComponent ' + index}>
              <TouchableOpacity
                onPress={() =>
                  props.onItemSelection && props.onItemSelection(radioItem.id)
                }
                style={[
                  styles.containerStyle,
                  {marginBottom: props.alignmentPaddingSize},
                ]}>
                <View style={{marginRight: 9}}>
                  <View style={styles.inactiveBorder}>
                    {radioItem.isActive && <View style={styles.activeBorder} />}
                  </View>
                </View>
                {radioItem.title && (
                  <Text style={styles.radioTitle}>{radioItem.title}</Text>
                )}
              </TouchableOpacity>
              <View>{radioItem.component && radioItem.component}</View>
            </View>
          );
        } else {
          return (
            <TouchableOpacity
              onPress={() =>
                props.onItemSelection && props.onItemSelection(radioItem.id)
              }
              key={'RadioComponent ' + index}
              style={[
                styles.containerStyle,
                {
                  marginBottom:
                    index === radioArray.length - 1
                      ? 0
                      : verticalScale(props.paddingBottom),
                },
              ]}>
              <View style={{marginRight: props.alignmentPaddingSize}}>
                <View style={styles.inactiveBorder}>
                  {radioItem.isActive && <View style={styles.activeBorder} />}
                </View>
              </View>
              {radioItem.component && radioItem.component}
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

/*---- Default Props Start -------*/
RadioButton.defaultProps = {
  align: 'left',
  alignmentPaddingSize: 15,
  optionArr: [],
  paddingBottom: 25,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
RadioButton.propTypes = {
  align: PropTypes.string,
  alignmentPaddingSize: PropTypes.number,
  onItemSelection: PropTypes.func,
  optionArr: PropTypes.array,
  paddingBottom: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/
export default RadioButton;
