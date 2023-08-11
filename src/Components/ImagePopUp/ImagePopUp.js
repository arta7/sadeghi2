import React from 'react';
import {TouchableOpacity, View} from 'react-native';

//Third Party
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';

//Publicly Available Icons that Can be Used for Commercial Purposes
import CloseIcon from '../../assets/icons/discoverMenuIcons/closeWhiteSVG.svg';

const ImagePopUp = props => {
  return (
    <Modal backdropOpacity={0.76} isVisible={props.showImage}>
      <View
        style={[
          globalStyles.flex,
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
        ]}>
        <View>
          {/* --- Popup Close Icon Start --*/}
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => props.closeModal()}>
            <CloseIcon />
          </TouchableOpacity>
          {/* --- Popup Close Icon End --*/}

          {/* --- Popup Image Start --*/}
          {props.imagePath.length > 0 && (
            <View style={globalStyles.commonImageView}>
              <FastImage
                source={{uri: props.imagePath}}
                style={[globalStyles.flex, {borderRadius: 15}]}
                resizeMode={'stretch'}
              />
            </View>
          )}
          {/* --- Popup Image End --*/}

          {/* --- Popup Image Start --*/}
          {!props.imagePath && props.imageComponent && (
            <View style={globalStyles.commonImageView}>
              {props.imageComponent}
            </View>
          )}
          {/* --- Popup Image End --*/}
        </View>
      </View>
    </Modal>
  );
};
/*---- Default Props Start -------*/
ImagePopUp.defaultProps = {
  closeModal: () => {},
  imageComponent: null,
  imagePath: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
ImagePopUp.propTypes = {
  closeModal: PropTypes.func,
  imageComponent: PropTypes.object,
  imagePath: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default ImagePopUp;
