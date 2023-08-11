import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

//Third Party
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

//Utility
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {allColors} from '../../assets/styles/mainColors';

let componentIndex = 0;

const PickerList = props => {
  const [selectedValue, setSelectedValue] = useState();
  const [showModal, setShowModal] = useState(false);

  //what happens when item is selected
  function selectionValue(option) {
    setSelectedValue(option);
    props.onSelectedValue(option);
    closeModal();
  }

  //single option
  const renderOption = (option, index) => {
    return (
      <TouchableOpacity
        key={'picker_option_' + index}
        onPress={() => selectionValue(option)}>
        <View style={[styles.optionStyle]}>
          <Text style={[styles.optionTextStyle]}>{option}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderOptionList = () => {
    let options = props.optionArr.map((item, index) => {
      return renderOption(item, index);
    });

    return (
      <View style={styles.container} key={'modalPicker' + componentIndex++}>
        <View
          style={[
            styles.optionStyle,
            globalStyles.justifyCenter,
            globalStyles.alignItemsCenter,
          ]}>
          {/*--Title Start--*/}
          <Text style={globalStyles.commonPickerText}>{props.title}</Text>
          {/*--Title End--*/}
        </View>
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}>
          <View style={{paddingHorizontal: 10}}>{options}</View>
        </ScrollView>
      </View>
    );
  };

  //close the popup
  function closeModal() {
    setShowModal(false);
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={[
          styles.mainContainer,
          {backgroundColor: props.backgroundColor},
        ]}>
        <Text style={styles.textStyle}>{selectedValue}</Text>
        {props.rightIcon && props.rightIcon}
      </TouchableOpacity>
      <Modal
        backdropOpacity={0.76}
        isVisible={showModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={() => closeModal()}
        style={styles.modalStyle}>
        <SafeAreaView>{renderOptionList()}</SafeAreaView>
      </Modal>
    </View>
  );
};

/*---- Default Props Start -------*/
PickerList.defaultProps = {
  backgroundColor: allColors.white,
  optionArr: [],
  rightIcon: null,
  title: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
PickerList.propTypes = {
  backgroundColor: PropTypes.string,
  onSelectedValue: PropTypes.func,
  optionArr: PropTypes.array,
  rightIcon: PropTypes.object,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default PickerList;
