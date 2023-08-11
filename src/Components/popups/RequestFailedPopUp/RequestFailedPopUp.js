import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

//Third Party
import Modal from 'react-native-modal';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';

const RequestFailedPopUp = props => {
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        <Text style={styles.failedText}>{'Your Request Failed!'}</Text>
        <Text style={[styles.paymentText, globalStyles.marginTop10]}>
          {'Please add a payment'}
        </Text>
        <Text style={styles.paymentText}>{'method'}</Text>
        <View>
          <TouchableOpacity
            onPress={() => props.closePopUp()}
            style={styles.goTouchView}>
            <Text style={styles.goText}>{'Go!'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RequestFailedPopUp;
