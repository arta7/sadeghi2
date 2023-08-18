import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet, View,
  Text, TouchableOpacity, Alert, ScrollView
  , ActivityIndicator, BackHandler
} from "react-native";
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Textinputs from '../Components/Textinputs'
import Buttons from '../Components/Buttons'
import { Icon } from "react-native-elements";
import FitImage from 'react-native-fit-image';

export default ChangePassword = (props) => {
  const [PasswordValue, setPasswordValue] = useState('')
  const [RepeatPasswordValue, setRepeatPasswordValue] = useState('')
  const [PassError, setPassError] = useState('')
  const [PassRepError, setPassRepError] = useState('')
  const [showLoader, setshowLoader] = useState(false)
  const [Mobiles, setMobile] = useState('')

  let UserMobile = async () => {
    var UserData = await AsyncStorage.getItem('UserData')
    if (UserData != null && UserData != '') {
      var Data = JSON.parse(UserData)[0];
      setMobile(Data.Mobile)

    }
  }

  let removeItemValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch (exception) {
      return false;
    }
  }

  useEffect(() => {
    UserMobile()
  }, [])

  let toEnglishDigits = (str) => {

    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    var e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function (t) {
      return t.charCodeAt(0) - e;
    });

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function (t) {
      return t.charCodeAt(0) - e;
    });
    return str;
  }

  let SendMessage = () => {
    // console.log('mobile PasswordValue ',Mobiles,PasswordValue)
    if (Mobiles != '') {

      var checkData = CheckError()
      if (!checkData) {
        setshowLoader(true)
        var Body = {
          "Mobile": toEnglishDigits(Mobiles),
          "Password": PasswordValue
        }

        axios.post('https://bizhan.iran.liara.run/api/UpdateUsersPassword', Body)

          .then((response) => {


            console.log('response data 11', response.data)
            if (response.data.data.toString() == "400") {
              Alert.alert('اخطار', 'کاربر با مشخصات مورد نظر پیدا نشد')
              setshowLoader(false)
            }
            else if (response.data.data.toString() == "200") {
              props.navigation.replace('ChangePasswordAccept', { data: 'رمز عبور با موفقیت تغییر کرد' })
              removeItemValue('UserData')
              setshowLoader(false)

            }


          })
          .catch((error) => {
            setshowLoader(false)
            Alert.alert('اخطار', 'مشکلی پیش آمده است لطفا یک بار از برنامه خارج و دوباره وارد شوید.')
          })
      }

    }
    else {

    }
  }

  let CheckError = () => {

    var checkState = false
    setPassError('')
    setPassRepError('')

    if (PasswordValue.toString().trim() == '') {
      const passError = 'لطفا رمز عبور را وارد کنید '
      setPassError(passError)
      checkState = true
    }

    if (RepeatPasswordValue.toString().trim() == '') {
      const passError = 'لطفا رمز عبور تکرار را وارد کنید '
      setPassRepError(passError)
      checkState = true
    }

    if (RepeatPasswordValue.toString().trim() != PasswordValue.toString().trim()) {
      const passError = 'لطفا رمز عبورهای یکسان وارد کنید'
      setPassRepError(passError)
      setPassError(passError)
      checkState = true
    }



    return checkState;

  }


  let ChangePass = () => {
    if (!CheckError()) {
      setshowLoader(true)
      SendMessage()
    }

  }



  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.TopView}>

          <View style={styles.IconView}>
            <FitImage
              source={require('./../Images/lifestyles.png')}
              style={styles.TopIconStyle}
              resizeMode='stretch'
            />
          </View>


          <View style={[styles.TopTextView, {
            marginBottom: 5
            , marginHorizontal: wp(10)
          }]}>
            <Text style={[styles.TopText, {
              fontSize: wp('4')
            }]}>
              تغییر رمز عبور
            </Text>
          </View>

        </View>



        <View style={styles.BottomImageView}>


          <View style={styles.TextinputView}>
            <Textinputs
              changeText={(value) => { setPasswordValue(value) }}
              values={PasswordValue}
              placeHolder='رمز عبور جدید'
              secure={true}
              TextStyle={styles.TextStyle}
              style={styles.TextinputStyle}
              IconName='lock'
              IconType='font-awesome'
              IconColor='rgba(9,132,226,1)'
              BottomLine={{ backgroundColor: 'white' }}
              IconView={{ backgroundColor: 'white' }}
              ErrorTitle={PassError}
              ErrorTitleStyle={{ color: 'white' }}

            />
            <Textinputs
              changeText={(value) => { setRepeatPasswordValue(value) }}
              values={RepeatPasswordValue}
              placeHolder='تکرار رمز عبور جدید'
              secure={true}
              TextStyle={styles.TextStyle}
              style={styles.TextinputStyle}
              IconName='lock'
              IconType='font-awesome'
              IconColor='rgba(9,132,226,1)'
              BottomLine={{ backgroundColor: 'white' }}
              IconView={{ backgroundColor: 'white' }}
              ErrorTitle={PassRepError}
              ErrorTitleStyle={{ color: 'white' }}
            />
            {showLoader ?
              <ActivityIndicator size='large' color='white'
                style={{
                  width: wp('40')
                  , marginHorizontal: wp(30),
                  justifyContent: 'center', alignItems: 'center', marginTop: 30
                }} />
              :
              <Buttons
                ButtonStyle={styles.ButtonStyle}
                titleStyle={styles.ButtonTitle}
                titleText='تغییر رمز عبور'
                ButtonOperator={() => { ChangePass() }}

              />
            }
          </View>


        </View>





      </ScrollView>
    </View>



  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  TopView: {
    width: wp('100%'), height: hp('40%'), marginTop: '20%'
  },
  IconView: {
    justifyContent: 'center', width: wp('20%')
    , height: hp('10%'), alignItems: 'center', marginHorizontal: wp('40%')
  },
  TopIconStyle: {
    width: wp('20%'), height: hp('10%')
  },
  TopTextView: {
    marginTop: 5, justifyContent: 'center'
    , alignItems: 'center', alignSelf: 'center'
  },
  TopText:
  {
    color: 'rgba(9,132,226,1)',
    fontSize: wp('8%'), textAlign: 'left'
  },
  BottomImageView: {
    width: wp('100%'), height: hp('70%')
    , bottom: 0, backgroundColor: 'rgba(9,132,226,1)', borderTopLeftRadius: 50, borderTopRightRadius: 50
    , borderTopWidth: 1, borderTopColor: 'transparent'
  },
  BottomImage:
  {
    width: wp('100%'), height: hp('60%')
  },
  TextinputView:
  {
    position: 'absolute', bottom: '45%'
  },
  TextStyle:
  {
    fontSize: wp('4%'), color: 'white', width: '100%'
    , height: '100%'
  },
  TextinputStyle: {
    width: wp('70%'), marginHorizontal: wp('15%')
    , height: hp('7%')
    , marginTop: 20
  },
  ButtonStyle:
  {
    backgroundColor: 'white'
    , width: wp('40%'), marginHorizontal: wp('30%'),
    borderRadius: 15, height: 40, marginTop: 30,
    justifyContent: 'center', alignItems: 'center', borderWidth: 1
    , borderColor: 'rgba(9,132,226,1)'
  },
  ButtonTitle:
  {
    color: 'rgba(9,132,226,1)',
    fontSize: wp('3.5%'), textAlign: 'center'
  }




});
