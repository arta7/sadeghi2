import React from 'react';
import {Text, View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Component
import ProfileWithBorder from '../ProfileWithBorder/ProfileWithBorder';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {screenWidth} from '../../utility/Scale';
import {allColors} from '../../assets/styles/mainColors';

const InviteFriend = props => {
  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        styles.mainContainer,
        globalStyles.alignItemsCenter,
      ]}>
      {/* --- Profile Picture Start --*/}
      <View style={styles.profileView}>
        <ProfileWithBorder
          imagePath={props.profilePicture}
          imageComponent={props.profilePictureComponent}
          imageHeight={screenWidth * 0.1}
          imageWidth={screenWidth * 0.1}
          borderColor={allColors.borderBlack}
        />
      </View>
      {/* --- Profile Picture End --*/}
      <View style={styles.nameView}>
        {/* --- Name Start --*/}
        <Text style={styles.nameText}>{props.name}</Text>
        {/* --- Name End --*/}

        {/* --- Invitation Code Start --*/}
        <View style={globalStyles.flexDirectionRow}>
          <Text style={styles.inviteCodeTitle}>{'Invite Code: '}</Text>
          <Text style={styles.inviteCodeText}>{props.code}</Text>
        </View>
        {/* --- Invitation Code End --*/}
      </View>
      <View style={styles.dateView}>
        {/* --- Money Gained Start --*/}
        <Text style={styles.moneyGainedText}>
          {'$' + props.moneyGained.toFixed(2)}
        </Text>
        {/* --- Name End --*/}

        {/* --- Date Start --*/}
        <Text style={styles.dateText}>{props.date}</Text>
        {/* --- Date End --*/}
      </View>
    </View>
  );
};

/*---- Default Props Start -------*/
InviteFriend.defaultProps = {
  code: '',
  date: '',
  moneyGained: 0,
  name: '',
  profilePicture: '',
  profilePictureComponent: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
InviteFriend.propTypes = {
  code: PropTypes.string,
  date: PropTypes.string,
  moneyGained: PropTypes.number,
  name: PropTypes.string,
  profilePicture: PropTypes.string,
  profilePictureComponent: PropTypes.object,
};
/*---- Prop Type Expectations End -------*/
export default InviteFriend;
