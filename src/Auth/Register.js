
import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet, View,
  Text, TouchableOpacity, Alert, ScrollView
  , ActivityIndicator, BackHandler, KeyboardAvoidingView
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Textinputs from '../Components/Textinputs'
import Buttons from '../Components/Buttons'
import axios from 'axios'
import CircleLogo from "../Components/CircleLogo";




export default Register = (props) => {
  const [Username, setUsername] = useState('')
  const [PasswordValue, setPasswordValue] = useState('')
  const [RepeatPasswordValue, setRepeatPasswordValue] = useState('')
  const [Mobile, setMobile] = useState('')
  const [showLoader, setshowLoader] = useState(false)
  const [MobileError, setMobileError] = useState('')
  const [UsernameError, setUsernameError] = useState('')
  const [PasswordError, setPasswordError] = useState('')
  const [RepeatPasswordError, setRepeatPasswordError] = useState('')

  let CheckError = () => {

    var checkState = false
    setMobileError('')
    setPasswordError('')
    setRepeatPasswordError('')
    
      if (Mobile.toString().trim() == '') {
        const MobileError = 'لطفا شماره تماس را وارد کنید'
        setMobileError(MobileError)
        checkState = true
      }
      if (PasswordValue.toString().trim() == '') {
        const PasswordsError = 'لطفا رمز عبور را وارد کنید'
        setPasswordError(PasswordsError)
        checkState = true

      }
      if (PasswordValue.toString().trim() != RepeatPasswordValue.toString().trim()) 
      {
        const PasswordsError = 'لطفا رمز عبور را یکسان وارد کنید'
        setPasswordError(PasswordsError)
        setRepeatPasswordError(PasswordsError)
        checkState = true
      }
    
    return checkState;

  }

  
  let  toEnglishDigits=(str)=> {

    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    var e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function(t) {
        return t.charCodeAt(0) - e;
    });

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function(t) {
        return t.charCodeAt(0) - e;
    });
    return str;
}

  let Register = () => {

    var Body = {
      "Name": '',
      "Family": '',
      "Mobile": toEnglishDigits(Mobile),
      "Gender": 1,
      "Education": '',
      "Age": '',
      Password: PasswordValue
    }

    if (CheckError() == false) {
      setshowLoader(true)
      axios.post('https://bizhan.iran.liara.run/api/AddUsers', Body)

        .then((response) => {


          console.log('response', response.data)
          if (response.data.data.toString() == "401") {
            Alert.alert('اخطار', 'کاربری با شماره موبایل وارد شده  قبلا تعریف شده است.')
          }
          else if (response.data.data.toString() == "200") {
            console.log('response result : ', 'Register Complete')
            Alert.alert('', 'ثبت نام کاربر با موفقیت انجام گردید.لطفا از صفحه ورود به برنامه وارد شوید.')
            props.navigation.replace('Login')
          }
          setshowLoader(false)
         
        })
        .catch((error) => {
          setshowLoader(false)
          Alert.alert('اخطار', 'ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید')
        })
    }


  }


  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={{ width: wp('100%'), height: hp('35%') }}>
          <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: '15%' }}>
            <CircleLogo
              onPress={() => { }}
              circleDiameter={wp('15%')}
            // children={<Text
            //    style={{color:'white',fontSize:wp('3%')}}>Logo</Text>}
            />
          </View>
          <View style={{
            justifyContent: 'center', alignItems: 'center', marginTop: '15%'
          }}>
            <Text style={{
              color: 'white',
              fontSize: wp('8%'), textAlign: 'left'
            }}>
              ساخت حساب کاربری
            </Text>
          </View>



        </View>





        <View style={{
          width: wp('100%'), height: hp('65%')
          , backgroundColor: 'white', borderTopLeftRadius: 50, borderTopRightRadius: 50
          , borderTopWidth: 1, borderTopColor: 'transparent'
        }}>

          <View style={{ width: wp('100%'), height: '100%' }}>

            {/* <Textinputs
 changeText = {(value)=>{setUsername(value)}}
 values = {Username}
 placeHolder='نام کاربری'
 TextStyle={{fontSize:wp('4%'),color:'black',width:'100%'
 ,height:'100%',borderBottomWidth:1,borderBottomColor:'transparent'}}
 style={{width:wp('70%'),marginHorizontal:'15%'
 ,height:hp('7%')
 ,marginTop:20}}
 IconName='user'
 IconType='font-awesome'
 IconColor='white'
 ErrorTitle={UsernameError}
 IconView={{backgroundColor:'rgba(9,132,226,1)'}}
 ErrorTitleStyle={{color:'rgba(9,132,226,1)'}}
 BottomLine={{backgroundColor:'rgba(9,132,226,1)'}}
 placeholderTextColor={'rgba(9,132,226,1)'}
/>  */}

            <Textinputs
              changeText={(value) => { setMobile(value) }}
              values={Mobile}
              placeHolder='شماره تماس'
              TextStyle={{
                fontSize: wp('4%'), color: 'black', width: '100%'
                , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
              }}
              style={{
                width: wp('70%'), marginHorizontal: '15%'
                , height: hp('7%')
                , marginTop: 20
              }}
              IconName='phone'
              IconColor='white'
              ErrorTitle={MobileError}
              IconView={{ backgroundColor: 'rgba(9,132,226,1)' }}
              ErrorTitleStyle={{ color: 'red' }}
              BottomLine={{ backgroundColor: 'rgba(9,132,226,1)' }}
              placeholderTextColor={'rgba(9,132,226,1)'}
              keyboardType='numeric'
            />



            <Textinputs
              changeText={(value) => { setPasswordValue(value) }}
              values={PasswordValue}
              placeHolder='رمز عبور'
              secure={true}
              TextStyle={{
                fontSize: wp('4%'), color: 'black', width: '100%'
                , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
              }}
              style={{
                width: wp('70%'), marginHorizontal: '15%'
                , height: hp('7%')
                , marginTop: 20
              }}
              IconName='lock'
              IconType='font-awesome'
              IconColor='white'
              ErrorTitle={PasswordError}
              IconView={{ backgroundColor: 'rgba(9,132,226,1)' }}
              ErrorTitleStyle={{ color: 'red' }}
              BottomLine={{ backgroundColor: 'rgba(9,132,226,1)' }}
              placeholderTextColor={'rgba(9,132,226,1)'}
            />

            <Textinputs
              changeText={(value) => { setRepeatPasswordValue(value) }}
              values={RepeatPasswordValue}
              placeHolder='تکرار رمز عبور'
              secure={true}
              TextStyle={{
                fontSize: wp('4%'), color: 'black', width: '100%'
                , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
              }}
              style={{
                width: wp('70%'), marginHorizontal: '15%'
                , height: hp('7%')
                , marginTop: 20
              }}
              IconName='lock'
              IconType='font-awesome'
              IconColor='white'
              ErrorTitle={RepeatPasswordError}
              IconView={{ backgroundColor: 'rgba(9,132,226,1)' }}
              ErrorTitleStyle={{ color: 'red' }}
              BottomLine={{ backgroundColor: 'rgba(9,132,226,1)' }}
              placeholderTextColor={'rgba(9,132,226,1)'}
            />

            {showLoader ?
              <ActivityIndicator size='large' color='rgba(9,132,226,1)'
                style={{width: wp('40%'), marginHorizontal: wp('30%'),
                height: 50,
                justifyContent: 'center', alignItems: 'center', marginTop: '10%', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }} />
              :
              <Buttons
                ButtonStyle={{
                  backgroundColor: 'rgba(9,132,226,1)'
                  , width: wp('40%'), marginHorizontal: wp('30%'),
                  borderRadius: 15, height: 50,
                  justifyContent: 'center', alignItems: 'center', marginTop: '10%'
                  // ,position:'absolute',bottom:'20%'
                }}
                titleStyle={{ color: 'white', fontSize: wp('3.5%'), textAlign: 'center' }}
                titleText='ثبت نام'
                ButtonOperator={() => { Register() }}
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
    flex: 1, backgroundColor: 'rgba(9,132,226,1)'
  },

});
