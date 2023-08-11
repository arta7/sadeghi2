import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

//Third Party
import Modal from 'react-native-modal';

//component
import UnderlineTextIcon from '../../UnderlineTextIcon/UnderlineTextIcon';

//Publicly Available Icons that Can be Used for Commercial Purposes
import SuccessIcon from '../../../assets/icons/storeIcons/successSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import styles from './style';
import {FONT_FAMILY} from '../../../constants/constants';
import {navigate} from '../../../utility/NavigationService';

const RequestSuccessPopUp = props => {
  const [showSuccess, setSuccess] = useState(false);

  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        <SuccessIcon />
        <Text style={styles.orderSuccessText}>
          {!showSuccess
            ? 'You have Placed the Order Successfully!'
            : 'Thank You!'}
        </Text>
        {!showSuccess ? (
          <View style={styles.paddingView}>
            <Text
              style={[
                styles.orderSuccessMessageText,
                globalStyles.marginTop10,
              ]}>
              {'Thank you for your payment.'}
            </Text>
            <Text style={styles.orderSuccessMessageText}>
              {'Your order has been processed and will be deliver soon.'}
            </Text>
            <Text style={styles.orderSuccessMessageText}>
              {
                'Do you want to save your card info as Method of your payment in the future?'
              }
            </Text>
          </View>
        ) : (
          <View style={styles.paddingView}>
            <Text
              style={[
                styles.orderSuccessMessageText,
                globalStyles.marginTop10,
              ]}>
              {
                'Your card info has been added as method of payment successfully.'
              }
            </Text>
          </View>
        )}
        {!showSuccess && (
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.marginTop15,
              globalStyles.justifySpaceBetween,
              styles.paddingView,
            ]}>
            <TouchableOpacity
              onPress={() => setSuccess(true)}
              style={[styles.touchButtons, {borderColor: '#26722c'}]}>
              <Text style={[styles.touchText, {color: '#26722c'}]}>
                {'YES'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.closePopUp()}
              style={[styles.touchButtons, {borderColor: '#ff0000'}]}>
              <Text style={[styles.touchText, {color: '#ff0000'}]}>{'NO'}</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={[globalStyles.marginTop20, {alignSelf: 'center'}]}>
          <UnderlineTextIcon
            fontFamily={FONT_FAMILY.RobotoCondensedRegular}
            fontWeight={'400'}
            fontSize={20}
            onPress={() => {
              props.closePopUp();
              navigate(Routes.DeliveryProcessScreen);
            }}
            isUnderlined={true}
            title={'Check Status of Delivery'}
            color={'#005295'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default RequestSuccessPopUp;
