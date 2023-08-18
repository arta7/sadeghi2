import React, { Component, useState,useEffect,useContext } from "react";
import { StyleSheet, View, 
    Text,TouchableOpacity,Alert,ScrollView
    ,ActivityIndicator,Image ,BackHandler} from "react-native";
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Textinputs from './../Components/Textinputs'
import Buttons from './../Components/Buttons'
// import { Icon as Icons } from 'react-native-gradient-icon';
// import { Icon }  from "react-native-elements";
import CircleLogo from "../Components/CircleLogo";
import CheckBox from '@react-native-community/checkbox';
// import FitImage from 'react-native-fit-image';
import {LoginAPI} from './../API/APIMaster'
// import {
//   TranslationsProvider,
//   useTranslations,
//   useTranslationsState,
// } from 'react-native-text-localizer';
// import {Redux} from '../Control/Data'
// const Language=[{id:'1',Title:'English'},{id:'2',Title:'Germany'}]


export default Login = (props) =>{
   const[Username,setUsername] = useState('')
   const[PasswordValue,setPasswordValue] = useState('')
   const [toggleCheckBox, setToggleCheckBox] = useState(false)
   const[UsernameError,setUsernameError]=useState('')
   const[PasswordError,setPasswordError]=useState('')
   const[showLoader,setshowLoader] = useState(false)
   const[LanName,setLanName] = useState('')
   const[LanId,setLanId] = useState('')
   const[ShowLan,setShowLan] = useState(false)
   const[lan,setlan] = useState('us')
  //  const { Login,Usernames,Password,Remember,Restore,Account,Create }
  //   = useTranslations(translationsContext);
    // const value = useContext(Redux);
    // const [stateValue, setStateValue] = value;
    //  const [stateValue2, setStateValue2] = value2;

    // AsyncStorage.setItem("Token",LoginData.token)

   let GetUser=async()=>{
      var UserData = await AsyncStorage.getItem('UserData')
      console.log('userData : ' ,UserData )
      if(UserData != null && UserData !='')
      {
        props.navigation.replace('Main')
      }
      
   }


    useEffect(()=>{
      GetUser()
    },[])


   let CheckError=()=>{

    var checkState=false
    setUsernameError('')
    setPasswordError('')
    if(Username.toString().trim() == '')
    {
       const UsersError='لطفا شماره موبایل را وارد کنید'
      setUsernameError(UsersError)
      checkState=true
    }
    if(PasswordValue.toString().trim() == '')
    {
       const PasswordsError='لطفا رمز عبور را وارد کنید'
      setPasswordError(PasswordsError)
      checkState=true
      
    }
    return  checkState;
    
  }

  
   let Changelan=()=>{
    //  setLanguage('gm')
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


  let Logins=()=>{
    if(CheckError() == false)
    {
      setshowLoader(true)
  var Body = {
    "Mobile": toEnglishDigits(Username),
    "Password": PasswordValue
}

 axios.post('https://bizhan.iran.liara.run/api/CheckUserLogin',Body)

.then( (response)=> {
  
       
         console.log('response',response.data) 
        if(response.data.data.toString() == "400")
        {
          Alert.alert('اخطار','کاربر با مشخصات مورد نظر پیدا نشد')
        }
        else  if(response.data.data.toString() == "200")
        {
          console.log('response result : ',response.data.result) 
          AsyncStorage.setItem('UserData',JSON.stringify(response.data.result))
          props.navigation.replace('Main')
        }
        setshowLoader(false)
        //props.navigation.replace('Main')
})
.catch( (error)=> {
  setshowLoader(false)
  Alert.alert('اخطار','ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید')
})
    }
   
  }

    return (
     <View style={styles.root}>
       <ScrollView>
      
       {/* <CenterModal showModal={ShowLan} 
       closeModal={()=>setShowLan(false)}  dataSource={Language}
       CategorySelected={LanName}  setCategorySelected={setLanName}
       CategorySelectedId={LanId}  setCategorySelectedId={setLanId}
        /> */}




{/* <View style={{height:hp('100%'),width:wp('40%'),position:'absolute',right:0
          
        }}>
 
<TouchableOpacity style={{width:30,height:30,
        alignItems:'flex-end',justifyContent:'center'
        ,position:'absolute'
        ,top:10,right:wp('15%')
        }}
        onPress={()=>{Alert.alert('test')}}
        >
<Icon 
     size={wp('8%')}
     name='menu' color='white'/>

        </TouchableOpacity> 

          </View> */}


          <View style={{width:wp('100%'),height:hp('70%'),backgroundColor:'rgba(9,132,226,1)'
          ,borderBottomLeftRadius:50,borderBottomRightRadius:50
      ,borderBottomWidth:1,borderBottomColor:'transparent'
          }}>
            




   
          <View style={{height:hp('100%'),width:'100%'}}>
          
        

         <View style={{width:wp('100%'),justifyContent:'center'
     ,alignItems:'center',height:hp('25%')}}>
          
          <CircleLogo
  onPress = {() => {}}
  circleDiameter = {wp('35%')}
  // children={<Text style={{color:'white',fontSize:wp('7%')}}>Logo</Text>}
/>
          
     </View>
      

     <Textinputs
       changeText = {(value)=>{setUsername(value)}}
       values = {Username}
       placeHolder={'شماره موبایل'}
       TextStyle={{fontSize:wp('4%'),color:'white',width:'100%'
       ,height:'100%'}}
       style={{width:wp('70%'),marginHorizontal:wp('15%')
       ,height:hp('7%')
       ,marginTop:20}}
       IconName='user'
       IconType='font-awesome'
       IconColor='rgba(9,132,226,1)'
       ErrorTitle={UsernameError}
       BottomLine={{backgroundColor:'white'}}
       IconView={{backgroundColor:'white'}}
       ErrorTitleStyle={{color:'red'}}
     /> 


      <Textinputs
       changeText = {(value)=>{setPasswordValue(value)}}
       values = {PasswordValue}
       placeHolder={'رمز عبور'}
       secure={true}
       TextStyle={{fontSize:wp('4%'),color:'white',width:'100%'
       ,height:'100%'}}
       style={{width:wp('70%'),marginHorizontal:wp('15%')
       ,height:hp('7%')
       ,marginTop:20}}
       IconName='lock'
       IconType='font-awesome'
       IconColor='rgba(9,132,226,1)'
       ErrorTitle={PasswordError}
       BottomLine={{backgroundColor:'white'}}
       IconView={{backgroundColor:'white'}}
       ErrorTitleStyle={{color:'red'}}
     /> 

     <View style={{flexDirection:'row-reverse',
     width:wp('70%'),marginHorizontal:wp('15%')
     ,marginTop:20,justifyContent:'space-between',alignItems:'center'}}>
     {/* <TouchableOpacity style={{flexDirection:'row-reverse',
     justifyContent:'center',alignItems:'center'}}>
     <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(!toggleCheckBox)}
    tintColors={{true:'white',false:'white'}}
      />
     <Text style={{fontSize:wp('3.5%'),color:'white'}}>ذخیره نام کاربری</Text>
     </TouchableOpacity> */}
     
     <TouchableOpacity style={{
     justifyContent:'center',alignItems:'center'
     ,padding:10}}
     onPress={()=>{props.navigation.navigate('ForgetPassword')}}
     >

       <Text style={{fontSize:wp('3.5%'),
       color:'white',textDecorationLine:'underline'}}>بازیابی رمز عبور</Text>
     </TouchableOpacity>
    



     </View>
     


     {showLoader ?
<ActivityIndicator size='large' color='white' 
style={{bottom:-30,width:wp('40%'),marginHorizontal:wp('30%'),height:50,marginTop:30,justifyContent:'center',alignItems:'center'}}/>
:
      <Buttons
      ButtonStyle={{backgroundColor:'white'
      ,width:wp('40%'),marginHorizontal:wp('30%'),
      borderRadius:15,height:50,marginTop:30,
      justifyContent:'center',alignItems:'center',
      borderWidth:1,borderColor:'rgba(9,132,226,1)'
      // ,position:'absolute'
      ,bottom:-30

      }}
      titleStyle={{color:'rgba(9,132,226,1)',fontSize:wp('3.5%'),textAlign:'center'}}
      titleText={'ورود'}
      ButtonOperator={()=>{Logins()}}
      />
    }



           </View>
      
     
{/* <TouchableOpacity style={{
          flexDirection:'row',alignItems:'center'
          ,justifyContent:'center',
          position:'absolute',top:'5%',left:'5%'
          }}
          onPress={()=>{Alert.alert('test')}}
          >
          </TouchableOpacity> */}


         </View>
         
         <View style={{
     width:wp('70%'),marginHorizontal:wp('15%'),marginTop:'10%'
     ,justifyContent:'center',alignItems:'center'}}>

<Text style={{fontSize:wp('3.5%')
,color:'rgba(9,132,226,1)'}}>حساب کاربری ندارید؟</Text>
<TouchableOpacity 
onPress={()=>{props.navigation.navigate('Register')}}
>
<Text style={{fontSize:wp('4.5%')
,color:'grey'}}
>ثبت نام</Text>
</TouchableOpacity>
     </View>


</ScrollView>
     </View>
      
       
      
    );
  }


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  
});
