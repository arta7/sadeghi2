import React from 'react';
import {View, Text} from 'react-native';

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

const OrderSuccessPopUp = props => {
  return (
    <Modal
      animationOutTiming={300}
      backdropOpacity={0.6}
      isVisible={props.showPopUp}>
      <View style={styles.viewContainer}>
        <SuccessIcon />
        <Text style={styles.orderSuccessText}>
          {'You have Placed the Order Successfully!'}
        </Text>
        <View style={styles.paddingView}>
          <Text
            style={[styles.orderSuccessMessageText, globalStyles.marginTop10]}>
            {
              'Thank you for your payment. You will get your food within 37 minutes.'
            }
          </Text>
          <Text style={styles.orderSuccessMessageText}>
            {'Thanks for using our service.'}
          </Text>
        </View>
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

export default OrderSuccessPopUp;
