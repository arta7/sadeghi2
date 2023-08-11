import {Platform, StyleSheet, Text, View,FlatList,Alert,ListView,
    ScrollView,Dimensions,TouchableOpacity,TextInput,ActivityIndicator,Picker,Image} from 'react-native';
 import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {Address} from './Address'
import Toast from 'react-native-simple-toast';

let axisConfig={
    headers:{
        "Accept": "application/json",
        "Content-Type":"application/json"
    }
}
let axisConfig1={
    headers:{
        "Access-Control-Allow-Origin": "*",
        // 'Authorization' : LoginData.type + ' ' + LoginData.token
    }
}

export function Registers(_email,_username,_pass,_updateIndicator,self)
{
    let params={
        "username":_username,
        "email":_email,
        "password":_pass
    }
    _updateIndicator(true)
   console.log('address',Address.URL + Address.Account.Register)
  axios.post(Address.URL + Address.Account.Register,params,axisConfig)
  .then( (response)=> {
         
          console.log('response',response.data) 
          _updateIndicator(false) 
          self.navigate('Login')
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data.data[0].messages[0].message)  
  })
}


export function LoginAPI(_username,_pass,_updateIndicator,self)
{
    let params={
        "identifier":_username,
        "password":_pass
    }
    _updateIndicator(true)
   console.log('address',Address.URL + Address.Account.Login)
  axios.post(Address.URL + Address.Account.Login,params,axisConfig)
  .then( (response)=> {
         
          console.log('response login Data',response.data) 
          AsyncStorage.setItem('IsLogin','1')
          AsyncStorage.setItem('LoginData',response.data)
          _updateIndicator(false) 
          self.navigation.replace('Controls')
         
          Toast.showWithGravity("Login is Accept", Toast.LONG, Toast.CENTER);
        
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data.data[0].messages[0].message)  
  })
}



export function ForgetPasswords(_email,_updateIndicator,self,check)
{
    let params={
        "email":_email
    }
    _updateIndicator(true)
   console.log('address',Address.URL + Address.Account.ForgetPassword)
  axios.post(Address.URL + Address.Account.ForgetPassword,params,axisConfig)
  .then( (response)=> {
         
          console.log('response forget pass :',response.data.ok) 
          _updateIndicator(false) 
          if(response.data.ok && check==true)
          {
           self.navigate('OTPAccept',{email:_email})
      
          }
          else  if(response.data.ok && check==false)
          {
            Toast.showWithGravity('Token Send,Please Check Your Email'
                , Toast.LONG, Toast.CENTER);
          }
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data.data[0].messages[0].message)  
  })
}



export function ResetPasswords(_code,_newpass,_newpassConfirm,_updateIndicator,self)
{
    let params={
      "code":_code,
      "password":_newpass,
      "passwordConfirmation":_newpassConfirm
    }
    _updateIndicator(true)
   console.log('address',Address.URL + Address.Account.ResetPassword)
  axios.post(Address.URL + Address.Account.ResetPassword,params,axisConfig)
  .then( (response)=> {
         
        console.log('status reset : ',response.data)
        self.navigate('ChangePasswordAccept')
          _updateIndicator(false) 
        
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data.data[0].messages[0].message)  
  })
}


export function SpecialPrograms(_currentdate,_setData,_updateIndicator)
{
     
     _updateIndicator(true)
  axios.get(Address.URL + Address.Main.SpecialProgram + _currentdate,axisConfig)
  .then( (response)=> {
         
        console.log('response data : ',response.data)
        _setData(response.data)
           _updateIndicator(false) 
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data)  
  })
}

export function StoreFeature(_currentdate,_setData,_updateIndicator)
{
     
     _updateIndicator(true)
  axios.get(Address.URL + Address.Main.StoreFeature + _currentdate,axisConfig)
  .then( (response)=> {
         
        console.log('response data : ',response.data)
        _setData(response.data)
         _updateIndicator(false) 
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data)  
  })
}


export function AllTags(_setData,_updateIndicator,_returnItem)
{
     
     _updateIndicator(true)
  axios.get(Address.URL + Address.Main.Tags,axisConfig)
  .then( (response)=> {
         
        console.log('response data  tags : ',response.data)

        if(response.data.length > 0)
        {
        var PushData = [];
        PushData.push({
            id: 0,
            name: "All",
            locale: "en",
            published_at: "2021-11-26T23:39:51.000Z",
            created_at: "2021-11-26T23:39:00.000Z",
            updated_at: "2021-11-26T23:39:52.000Z",
            localizations: [ ]
            })
        for(let i=0;i<response.data.length;i++)
        {
            PushData.push(response.data[i])
        }

        
            _returnItem(0)
        }

         

        _setData(PushData)
         _updateIndicator(false) 
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data)  
  })
}


export function AllProgramTags(_tagId,_setData,_updateIndicator)
{
    var Addr = null
     _updateIndicator(true)
     if(_tagId == 0)
      Addr = axios.get(Address.URL + Address.Main.AllProgramTags,axisConfig)
   else 
   Addr =  axios.get(Address.URL + Address.Main.ProgramTags+_tagId,axisConfig)
  
  Addr.then( (response)=> {
         
        console.log('response program tasg data : ',response.data)
        _setData(response.data)
         _updateIndicator(false) 
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors program tasg',error.response.data)  
  })
}
