import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Component
import CachableImage from '../CachableImage/CachableImage';

//Publicly Available Icons that Can be Used for Commercial Purposes
import CompletedIcon from '../../assets/icons/generalIcons/completedSVG.svg';
import InCompletedIcon from '../../assets/icons/generalIcons/incompleteSVG.svg';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const OrderedItem = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress && props.onPress()}
      style={[
        globalStyles.flexDirectionRow,
        styles.mainContainer,
        globalStyles.alignItemsCenter,
      ]}>
      {/*--Order Image Start--*/}
      <View style={styles.profileView}>
        {props.restaurantIconPath.length > 0 && (
          <CachableImage
            style={styles.imageView}
            source={{uri: props.restaurantIconPath}}
          />
        )}
        {props.restaurantIconPath.length === 0 &&
          props.restaurantIconComponent && (
            <View>{props.restaurantIconComponent}</View>
          )}
      </View>
      {/*--Order Image End--*/}

      <View style={styles.nameView}>
        {/*-Name Start--*/}
        <Text style={styles.nameText}>{props.name}</Text>
        {/*-Name End--*/}

        {/*-Invoice Information Start--*/}
        {props.invoiceNumber && (
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}>
            <Text style={styles.inviteCodeTitle}>{'Invoice: '}</Text>

            <Text style={styles.inviteCodeText}>{props.invoiceNumber}</Text>
          </View>
        )}
        {/*-Invoice Information End--*/}

        {/*--Description Start--*/}
        {props.description && (
          <Text style={styles.descriptionText}>{props.description}</Text>
        )}
        {/*--Description End--*/}
      </View>
      <View style={styles.priceView}>
        {/*-Amount Paid Start--*/}
        <Text style={styles.amountToPayText}>
          {'$' + props.amountPaid.toFixed(2)}
        </Text>
        {/*-Amount Paid End--*/}

        {/*-Completed Icon Start--*/}
        {props.isCompleted ? (
          <CompletedIcon width={25} height={25} />
        ) : (
          <InCompletedIcon width={25} height={25} />
        )}
        {/*-Completed Icon End--*/}
      </View>
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
OrderedItem.defaultProps = {
  amountPaid: 0,
  date: '',
  description: '',
  invoiceNumber: '',
  isCompleted: false,
  name: '',
  restaurantIconPath: '',
  restaurantIconComponent: {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
OrderedItem.propTypes = {
  amountPaid: PropTypes.number,
  date: PropTypes.string,
  description: PropTypes.string,
  invoiceNumber: PropTypes.string,
  isCompleted: PropTypes.bool,
  name: PropTypes.string,
  onPress: PropTypes.func,
  restaurantIconComponent: PropTypes.object,
  restaurantIconPath: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default OrderedItem;
