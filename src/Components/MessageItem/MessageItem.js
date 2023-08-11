import React from 'react';
import {Text, View} from 'react-native';

//Third Party
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import PropTypes from 'prop-types';

//Publicly Available Icons that Can be Used for Commercial Purposes
import DateIcon from '../../assets/icons/generalIcons/dateIcons/dateSVG.svg';
import TimeIcon from '../../assets/icons/generalIcons/timeSVG.svg';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const MessageItem = props => {
  const setStartColor = props.currentUser ? {x: 0.0, y: 1.0} : {x: 0.0, y: 0.5};
  const setEndColor = props.currentUser ? {x: 1.4, y: 1.0} : {x: 0.5, y: 1.0};

  const currentUserTimeDate = props.currentUser && (
    <View style={styles.rightDateView}>
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
        <DateIcon />
        {/*-Message Date Start--*/}
        <Text
          allowFontScaling={false}
          style={[styles.dateText, globalStyles.marginLeft5]}>
          {moment.unix(props.messageInformation.dateSent).format('MMM. DD')}
        </Text>
        {/*-Message Date End--*/}
      </View>
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
        <TimeIcon />
        {/*-Message Hour Start--*/}
        <Text
          allowFontScaling={false}
          style={[styles.dateText, globalStyles.marginLeft5]}>
          {moment.unix(props.messageInformation.dateSent).format('hh:mm A')}
        </Text>
        {/*-Message Hour End--*/}
      </View>
    </View>
  );

  const otherUserTimeDate = !props.currentUser && (
    <View style={styles.leftDateView}>
      {/*-Message Date Start--*/}
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
        <Text
          allowFontScaling={false}
          style={[styles.dateText, globalStyles.marginRight5]}>
          {moment.unix(props.messageInformation.dateSent).format('MMM. DD')}
        </Text>
        {/*-Message Date End--*/}
        <DateIcon />
      </View>
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
        {/*-Message Hour Start--*/}
        <Text
          allowFontScaling={false}
          style={[styles.dateText, globalStyles.marginRight5]}>
          {moment.unix(props.messageInformation.dateSent).format('hh:mm A')}
        </Text>
        {/*-Message Hour End--*/}
        <TimeIcon />
      </View>
    </View>
  );

  //Photo
  const currentPhotoView = props.currentUser && (
    <View style={styles.photoLeft}>
      <View style={styles.onlineView} />
      <FastImage
        source={{uri: props.messageInformation.profilePicturePath}}
        style={styles.profileImage}
      />
    </View>
  );

  //Other User Photo
  const otherPhotoView = !props.currentUser && (
    <View style={styles.photoRight}>
      <FastImage
        source={{uri: props.messageInformation.profilePicturePath}}
        style={styles.profileImage}
      />
      <View style={styles.onlineView} />
    </View>
  );

  return (
    <View
      style={[
        styles.messageContainer,
        props.currentUser ? styles.positionToRight : styles.positionToLeft,
      ]}>
      {currentUserTimeDate}
      {otherPhotoView}
      {/*-Message Start--*/}
      <LinearGradient
        start={setStartColor}
        end={setEndColor}
        colors={
          props.currentUser ? ['#26722c', '#60b344'] : ['#ffca40', '#ffb800']
        }
        style={
          props.currentUser ? styles.messageToRight : styles.messageToLeft
        }>
        <Text
          style={[props.currentUser ? styles.textToRight : styles.textToLeft]}>
          {props.messageInformation.text}
        </Text>
      </LinearGradient>
      {/*-Message End Start--*/}
      {currentPhotoView}
      {otherUserTimeDate}
    </View>
  );
};

/*---- Default Props Start -------*/
MessageItem.defaultProps = {
  currentUser: false,
  messageInformation: {text: '', profilePicturePath: '', dateSent: ''},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
MessageItem.propTypes = {
  currentUser: PropTypes.bool,
  messageInformation: PropTypes.object,
};
/*---- Prop Type Expectations End -------*/
export default MessageItem;
