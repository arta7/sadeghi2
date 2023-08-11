import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';

//Third Party
import Modal from 'react-native-modal';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';

const OrderProcessPopUp = props => {
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        <ActivityIndicator size={'large'} />
        <Text style={styles.orderSuccessText}>{'Please Wait'}</Text>
        <View style={styles.paddingView}>
          <Text
            style={[styles.orderSuccessMessageText, globalStyles.marginTop10]}>
            {'System is waiting when shipper accept your order delivery.'}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default OrderProcessPopUp;
