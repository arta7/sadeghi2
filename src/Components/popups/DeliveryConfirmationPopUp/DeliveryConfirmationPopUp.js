import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

//Third Party
import Modal from 'react-native-modal';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {verticalScale} from '../../../utility/Scale';

const DeliveryConfirmationPopUp = props => {
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        <Image
          source={require('../../../assets/placeholders/80x80.png')}
          style={{
            height: verticalScale(80),
            width: verticalScale(80),
            borderRadius: 3,
          }}
        />
        <Text style={styles.titleText}>{'Delivery Confirmation'}</Text>
        <View style={styles.paddingView}>
          <Text style={[styles.descText, globalStyles.marginTop10]}>
            {'Driver asks to confirm your order delivery!'}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => props.closePopUp()}
            style={styles.goTouchView}>
            <Text style={styles.goText}>{'Confirm'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DeliveryConfirmationPopUp;
