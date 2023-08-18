
import React, { useRef, useState, useEffect } from "react";
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
import GenderSelector from "../Components/GenderSelector";
import AsyncStorage from "@react-native-community/async-storage";
import { Icon } from "react-native-elements";
import Sidemenu from './../Main/SideMenu';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Title,
  Segment, Drawer
} from "native-base";
import { Picker as SelectPicker } from '@react-native-picker/picker';

export default Profiles = (props) => {
  const [Username, setUsername] = useState('')


  const [Name, setName] = useState('')
  const [Family, setFamily] = useState('')
  const [Mobile, setMobile] = useState('')
  const [UserAge, setUserAge] = useState('')
  const [Educations, setEducations] = useState('')


  const [PasswordValue, setPasswordValue] = useState('')
  const [RepeatPasswordValue, setRepeatPasswordValue] = useState('')
  const [Email, setEmail] = useState('')
  const [showLoader, setshowLoader] = useState(false)
  const [EmailError, setEmailError] = useState('')
  const [UsernameError, setUsernameError] = useState('')
  const [PasswordError, setPasswordError] = useState('')
  const [GenderSelectors, setGenderSelectors] = useState(1)
  const [selectedLanguage, setSelectedLanguage] = useState();
  const drawerRef = useRef();


  let closeDrawer = () => {
    drawerRef?.current._root.close()
  }

  let openDrawer = () => {
    drawerRef?.current._root.open()
  }

  let CheckError = () => {

    var checkState = false
    setUsernameError('')
    setEmailError('')
    setPasswordError('')
    if (Username.toString().trim() == '') {
      const UsersError = 'لطفا نام کاربری را وارد کنید'
      setUsernameError(UsersError)
      checkState = true
    }
    if (Email.toString().trim() == '') {
      const EmailsError = 'لطفا شماره تماس را وارد کنید'
      setEmailError(EmailsError)
      checkState = true
    }
    if (PasswordValue.toString().trim() == '') {
      const PasswordsError = 'لطفا پسورد را وارد کنید'
      setPasswordError(PasswordsError)
      checkState = true

    }
    return checkState;

  }

  let ReadData = async () => {
    var UserData = await AsyncStorage.getItem('UserData')
    if (UserData != null && UserData != '') {
      var Data = JSON.parse(UserData)[0];
      console.log('Data.Age : ', Data.Age)
      setUserAge(Data.Age)
      setName(Data.Name)
      setFamily(Data.Family)
      setMobile(Data.Mobile)

      setEducations(Data.Education)
      setGenderSelectors(Data.Gender)
      setPasswordValue(Data.Password)

    }
    console.log('Data Age : ', Data.Age)
  }


  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }


  useEffect(() => {
    ReadData()
  }, [])

  let CheckUserUpdate = () => {

    var Body = {
      "Mobile": Mobile,
      "Password": PasswordValue
    }

    axios.post('https://bizhan.iran.liara.run/api/CheckUserLogin', Body)

      .then((response) => {


        console.log('response', response.data)
        if (response.data.data.toString() == "200") {
          console.log('response result : ', response.data.result)
          AsyncStorage.setItem('UserData', JSON.stringify(response.data.result))
          Alert.alert('', 'اطلاعات با موفقیت بروزرسانی گردید.')
          setshowLoader(false)
        }

      })
      .catch((error) => {
        setshowLoader(false)
        Alert.alert('اخطار', 'ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید')
      })

  }


  let Update = () => {
      setshowLoader(true)
    {
      var Body = {
        "Name": Name,
        "Family": Family,
        "Mobile": Mobile,
        "Gender": GenderSelectors,
        "Education": Educations,
        "Age": UserAge
      }

      axios.post('https://bizhan.iran.liara.run/api/UpdateUsers', Body)

        .then((response) => {


          console.log('response', response.data)
          if (response.data.data.toString() == "400") {
            Alert.alert('اخطار', 'کاربر با مشخصات مورد نظر پیدا نشد')
            setshowLoader(false)
          }
          else if (response.data.data.toString() == "200") {
            console.log('response result : ', 'Updates')

            CheckUserUpdate()

          }
          //props.navigation.replace('Main')
        })
        .catch((error) => {
          setshowLoader(false)
          Alert.alert('اخطار', 'ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید')
        })
    }
  }

  return (
    <View style={styles.root}>
      <Drawer
        ref={drawerRef}
        side='right'
        content={<Sidemenu navigation={props.navigation} />}
        onClose={() => closeDrawer()}
        openDrawerOffset={0.4}
        panCloseMask={0.5}
        acceptPan={true}
      >
        <View style={{ flexDirection: 'row', backgroundColor: 'rgba(9,132,226,1)', elevation: 6, height: hp('5%'), width: wp('100%') }}>
          <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
              <Icon name='arrow-back' color='white' type="materialicon" size={30} />
            </TouchableOpacity>
          </View>

          <View style={{ width: wp('70%'), justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
              fontSize: wp('3.5%'),
              width: '100%',
              color: 'white',
              justifyContent: 'center',
              textAlign: 'right'
            }}> پروفایل کاربری</Text>
          </View>

          <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => { openDrawer() }}>
              <Icon name='menu' color='white' />
            </TouchableOpacity>
          </View>
          {/* <View style={{ width: wp('10%') }}>

                </View> */}
        </View>
        <ScrollView>
          <View style={{ width: wp('100%'), height: hp('30%') }}>
            <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: '15%' }}>
              <CircleLogo
                onPress={() => { }}
                circleDiameter={wp('15%')}
              // children={<Text
              //    style={{color:'white',fontSize:wp('3%')}}>Logo</Text>}
              />
            </View>
            <View style={{
              justifyContent: 'center', alignItems: 'center', marginTop: '10%'
            }}>
              <Text style={{
                color: 'white',
                fontSize: wp('6%'), textAlign: 'left'
              }}>
                ویرایش پروفایل کاربری
              </Text>
            </View>



          </View>





          <View style={{
            width: wp('100%'), height: hp('70%')
            , backgroundColor: 'white', borderTopLeftRadius: 50, borderTopRightRadius: 50
            , borderTopWidth: 1, borderTopColor: 'transparent'
          }}>

            <View style={{ width: wp('100%'), height: '100%' }}>

              <Textinputs
                changeText={(value) => { setName(value) }}
                values={Name}
                placeHolder='نام'
                TextStyle={{
                  fontSize: wp('4%'), color: 'black', width: '100%'
                  , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
                }}
                style={{
                  width: wp('70%'), marginHorizontal: '15%'
                  , height: hp('7%')
                  , marginTop: 20
                }}
                IconName='user'
                IconType='font-awesome'
                IconColor='white'
                ErrorTitle={UsernameError}
                IconView={{ backgroundColor: 'rgba(9,132,226,1)' }}
                ErrorTitleStyle={{ color: '#578ad6' }}
                BottomLine={{ backgroundColor: '#578ad6' }}
                placeholderTextColor={'rgba(9,132,226,1)'}
              />

              <Textinputs
                changeText={(value) => { setFamily(value) }}
                values={Family}
                placeHolder='نام خانوادگی'
                TextStyle={{
                  fontSize: wp('4%'), color: 'black', width: '100%'
                  , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
                }}
                style={{
                  width: wp('70%'), marginHorizontal: '15%'
                  , height: hp('7%')
                  , marginTop: 20
                }}
                IconName='user'
                IconType='font-awesome'
                IconColor='white'
                ErrorTitle={UsernameError}
                IconView={{ backgroundColor: 'rgba(9,132,226,1)' }}
                ErrorTitleStyle={{ color: '#578ad6' }}
                BottomLine={{ backgroundColor: '#578ad6' }}
                placeholderTextColor={'rgba(9,132,226,1)'}
              />

              <Textinputs
                changeText={(value) => { setMobile(value) }}
                values={Mobile}
                placeHolder='شماره همراه'
                TextStyle={{
                  fontSize: wp('4%'), color: 'gray', width: '100%'
                  , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
                }}
                style={{
                  width: wp('70%'), marginHorizontal: '15%'
                  , height: hp('7%')
                  , marginTop: 20
                }}
                IconName='phone'
                IconColor='white'
                ErrorTitle={EmailError}
                IconView={{ backgroundColor: 'rgba(9,132,226,1)' }}
                ErrorTitleStyle={{ color: '#578ad6' }}
                BottomLine={{ backgroundColor: '#578ad6' }}
                placeholderTextColor={'rgba(9,132,226,1)'}
                keyboardtype='numeric'
                Edit={false}
              />

              <Textinputs
                changeText={(value) => { setUserAge(value) }}
                values={UserAge.toString()}
                placeHolder='سن'
                TextStyle={{
                  fontSize: wp('4%'), color: 'black', width: '100%'
                  , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
                }}
                style={{
                  width: wp('70%'), marginHorizontal: '15%'
                  , height: hp('7%')
                  , marginTop: 20
                }}
                IconName='calendar'
                IconColor='white'
                ErrorTitle={''}
                IconType='font-awesome'
                IconView={{ backgroundColor: 'rgba(9,132,226,1)' }}
                ErrorTitleStyle={{ color: '#578ad6' }}
                BottomLine={{ backgroundColor: '#578ad6' }}
                placeholderTextColor={'rgba(9,132,226,1)'}
                keyboardtype='numeric'
              />

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginVertical:30 }}>

                <GenderSelector
                  Title='زن'
                  IconName='woman-outline'
                  IconType='ionicon'
                  Selected={GenderSelectors == 2 ? true : false}
                  Press={() => { setGenderSelectors(2) }}
                />

                <GenderSelector
                  Title='مرد'
                  IconName='man-outline'
                  IconType='ionicon'
                  Selected={GenderSelectors == 1 ? true : false}
                  Press={() => { setGenderSelectors(1) }}
                />
                <Text style={{ fontSize: wp('3.5%'), color: 'black', paddingHorizontal: 5 }}>جنسیت : </Text>
              </View>


              {/* <Textinputs
                changeText={(value) => { setEducations(value) }}
                values={Educations}
                placeHolder='تحصیلات'
                TextStyle={{
                  fontSize: wp('4%'), color: 'black', width: '100%'
                  , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
                }}
                style={{
                  width: wp('70%'), marginHorizontal: '15%'
                  , height: hp('7%')
                  , marginTop: 20
                }}
                IconName='school'
                IconColor='white'
                IconType='ionicon'
                ErrorTitle={EmailError}
                IconView={{ backgroundColor: 'rgba(9,132,226,1)' }}
                ErrorTitleStyle={{ color: '#578ad6' }}
                BottomLine={{ backgroundColor: '#578ad6' }}
                placeholderTextColor={'rgba(9,132,226,1)'}
              /> */}
               <Text style={{ fontSize: wp('3.5%'), color: 'black', paddingRight: wp(12), marginTop: 20 }}>تحصیلات : </Text>
              <View style={{ width: wp('70%'), marginHorizontal: '15%'
                  , height: hp('7%')
                  ,borderWidth:1,borderRadius:10,justifyContent:'center',borderColor:"rgba(9,132,226,1)"}}>
            <SelectPicker
                ref={pickerRef}
              
                mode="dropdown"
                selectionColor='rgba(9,132,226,1)'
                selectedValue={Educations}
               
                onValueChange={(itemValue, itemIndex) =>
                  setEducations(itemValue)
                }>
                   <SelectPicker.Item label="-" value=""   />
                <SelectPicker.Item label="بی سواد" value="بی سواد"   />
                <SelectPicker.Item label="سیکل" value="سیکل" />
                <SelectPicker.Item label="دیپلم" value="دیپلم" />
                <SelectPicker.Item label="فوق دیپلم" value="فوق دیپلم" />
                <SelectPicker.Item label="لیسانس" value="لیسانس" />
                <SelectPicker.Item label="فوق لیسانس" value="فوق لیسانس" />
                <SelectPicker.Item label="دکتری" value="دکتری" />
              </SelectPicker>
             
              </View>
            







              {showLoader ?
                <ActivityIndicator size='large' color='#578ad6'
                  style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }} />
                :
                <Buttons
                  ButtonStyle={{
                    backgroundColor: '#578ad6'
                    , width: wp('40%'), marginHorizontal: wp('30%'),
                    borderRadius: 15, height: 50,
                    justifyContent: 'center', alignItems: 'center', marginTop: '10%',marginBottom:50
                    // ,position:'absolute',bottom:'20%'
                  }}
                  titleStyle={{ color: 'white', fontSize: wp('3.5%'), textAlign: 'center' }}
                  titleText='ثبت'
                  ButtonOperator={() => { Update() }}
                />
              }

            </View>



          </View>




        </ScrollView>
      </Drawer>
    </View>



  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1, backgroundColor: '#578ad6'
  },

});
