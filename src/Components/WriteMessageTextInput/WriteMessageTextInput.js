import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-action-sheet';
import DocumentPicker from 'react-native-document-picker';

//Publicly Available Icons that Can be Used for Commercial Purposes
import AttachIcon from '../../assets/icons/chatIcons/submit_messageSVG.svg';
import CameraIcon from '../../assets/icons/chatIcons/cameraSVG.svg';
import SendIcon from '../../assets/icons/chatIcons/sendSVG.svg';
import MicIcon from '../../assets/icons/chatIcons/microphoneSVG.svg';

//Utils
import styles from './style';
import {ButtonAndroid, ButtonIOS} from '../../constants/constants';
import {
  checkCameraPermission,
  checkPhotoLibraryPermission,
  showPermissionAlert,
} from '../../utility/Helper';

const WriteMessageTextInput = props => {
  const checkMessageSendButton = !(props.message.trim().length > 0);

  const [files, setSelectedFile] = useState([]);
  const [images, setSelectedImages] = useState([]);

  //select document option
  const btnSelectDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setSelectedFile([...files, {...res, _id: Math.random()}]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  useEffect(() => {
    files.length > 0 && props.selectedDocument(files);
  }, [files, props]);

  useEffect(() => {
    images.length > 0 && props.selectedImage(images);
  }, [images, props]);

  //pick image function
  const btnPickImageClick = () => {
    ActionSheet.showActionSheetWithOptions(
      {
        options: Platform.OS === 'ios' ? ButtonIOS : ButtonAndroid,
        cancelButtonIndex: 2,
      },
      openPickerForImage,
    );
  };

  //open image picker
  const openPickerForImage = pickerType => {
    switch (pickerType) {
      case 0:
        //check permissions
        checkCameraPermission(granted => {
          if (granted) {
            ImagePicker.openCamera({
              mediaType: 'photo',
              multiple: true,
              compressImageQuality: 0.8,
              compressImageMaxHeight: 720,
              compressImageMaxWidth: 1080,
            })
              .then(img => {
                console.log('You chose an image ', img);
              })
              .catch(err => {
                console.log('Error :' + err.toString());
              });
          } else {
            //no permission
            showPermissionAlert('Permission', 'Camera Permission Required');
          }
        });
        break;
      case 1:
        //check permissions
        checkPhotoLibraryPermission(granted => {
          if (granted) {
            ImagePicker.openPicker({
              mediaType: 'photo',
              multiple: true,
              compressImageQuality: 0.8,
              compressImageMaxHeight: 720,
              compressImageMaxWidth: 1080,
            })
              .then(img => {
                setSelectedImages(img);
              })
              .catch(err => {
                console.log('Error :' + err.toString());
              });
          } else {
            //no permission
            showPermissionAlert(
              'Permission',
              'Photo Galley Permission Required',
            );
          }
        });
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/*--Attachment Start--*/}
      <TouchableOpacity onPress={() => btnSelectDocument()}>
        <AttachIcon width={18} height={39} />
      </TouchableOpacity>
      {/*--Attachment End--*/}

      {/*--Camera Start--*/}
      <TouchableOpacity
        onPress={() => btnPickImageClick()}
        style={styles.cameraIcon}>
        <CameraIcon width={22} height={17} />
      </TouchableOpacity>
      {/*--Camera End--*/}

      {/*--Message Start--*/}
      <AutoGrowingTextInput
        autoCorrect={false}
        allowFontScaling={false}
        style={styles.textInputStyle}
        onChangeText={props.onChangeMessage}
        value={props.message}
        maxHeight={150}
        minHeight={40}
      />
      {/*--Message End--*/}

      {/*--Send Start--*/}
      <TouchableOpacity
        disabled={checkMessageSendButton}
        onPress={() => props.onSendMessage()}
        style={styles.sendIcon}>
        <SendIcon width={14} height={14} />
      </TouchableOpacity>
      {/*--Send End--*/}

      {/*--Record Voice Start--*/}
      <TouchableOpacity style={styles.micIcon}>
        <MicIcon width={12} height={19} />
      </TouchableOpacity>
      {/*--Record Voice End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
WriteMessageTextInput.defaultProps = {
  message: '',
  selectedDocument: [],
  selectedImage: [],
};
/*---- Default Props End -------*/

WriteMessageTextInput.propTypes = {
  message: PropTypes.string,
  onChangeMessage: PropTypes.func,
  onSendMessage: PropTypes.func,
  selectedDocument: PropTypes.func,
  selectedImage: PropTypes.func,
};

export default WriteMessageTextInput;
