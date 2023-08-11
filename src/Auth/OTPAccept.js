import React, { Component, useState,useEffect } from "react";
import { StyleSheet, View, 
    Text,TouchableOpacity,Alert,ScrollView
    ,ActivityIndicator ,BackHandler,Linking} from "react-native";
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Textinputs from '../Components/Textinputs'
import Buttons from '../Components/Buttons'
import { Icon }  from "react-native-elements";
import CircleLogo from "../Components/CircleLogo";
import CheckBox from '@react-native-community/checkbox';
import FitImage from 'react-native-fit-image';
import CodeInput from 'react-native-confirmation-code-input';
import { Address } from "../API/Address";
import {ForgetPasswords} from './../API/APIMaster'



export default OTPAccept = (props) =>{
   const[Code,setCode] = useState('')
   const[showLoader,setshowLoader] = useState(false)

   let handleOpenURL=(event)=>{
      
    console.log('test details1', event.url.split('/')[2])
    if(event.url.split('/')[2] == Address.PaymentAddress)
    {
      console.log('Code',event.url.split('?')[1].toString().substring(5).toString())
      props.navigation.navigate('ChangePassword',
      {code:event.url.split('?')[1].toString().substring(5).toString()})
    }
  }



   useEffect(()=>{
    console.log('test details')
    Linking.getInitialURL().then(url => {

     
    })
    Linking.addEventListener('url', handleOpenURL);

    return () => {
      Linking.removeEventListener('url', handleOpenURL);
    }
   },[])



    return (
     <View style={styles.root}>
       
      
    
  
    
     <View style={{width:wp('100%'),height:hp('60%'),backgroundColor:'white'
      ,borderBottomLeftRadius:50,borderBottomRightRadius:50
      ,borderBottomWidth:1,borderBottomColor:'transparent'}}>

    <View style={{width:'100%',marginTop:'30%'}}>
     <View style={{width:'100%',
            alignItems:'flex-start',
            alignSelf:'flex-start',paddingLeft:'15%'}}>
        <Text style={{color:'rgba(9,132,226,1)',
        fontSize:wp('8%'),textAlign:'left'}}>
          Enter OTP
        </Text>
        </View>
        <View style={{marginTop:20,marginBottom:20}}>
        <View style={{width:'90%',
            alignItems:'flex-start',
            alignSelf:'flex-start',paddingLeft:'15%'}}>
        <Text style={{color:'rgba(9,132,226,1)',
        fontSize:wp('4%'),textAlign:'left'}}>
          Pleae Enter 8 digits code sent to your email
        </Text>
        </View>
    <CodeInput
      // keyboardType="numeric"
      codeLength={8}
      className='border-circle'
      containerStyle={{flexDirection:'row'}}
      inactiveColor='rgba(9,132,226,1)'
      activeColor='black'
      autoFocus={true}
      codeInputStyle={{ fontWeight: '400' }}
       onFulfill={(isValid, code) =>
        {
          setCode(isValid)
        }
        
        }
    />
</View>




</View>
<Buttons
      ButtonStyle={{backgroundColor:'white'
      ,width:wp('40%'),marginHorizontal:wp('30%'),
      borderRadius:15,height:40,marginTop:30,
      justifyContent:'center',alignItems:'center',borderWidth:1
      ,borderColor:'rgba(9,132,226,1)'
      ,position:'absolute',bottom:-20
      }}
      titleStyle={{color:'rgba(9,132,226,1)',
      fontSize:wp('3.5%'),textAlign:'center'}}
      titleText='Submit'
      ButtonOperator={()=>{ props.navigation.navigate('ChangePassword',
      {code:Code.toString()})}}
      />
     
     </View>

     
     <View style={{marginTop:'10%',justifyContent:'center'
       ,alignItems:'center',alignSelf:'center',flexDirection:'row'}}>
      <Text style={{color:'white',
        fontSize:wp('4%'),textAlign:'center'}}>
         Not received code?
        </Text>
        <TouchableOpacity style={{marginLeft:4}}
        onPress={()=>{
          
          ForgetPasswords(props.navigation.getParam('email').toString(),setshowLoader,props.navigation,false)
        }}
        >
                       {showLoader ?
<ActivityIndicator size='large' color='white' 
style={{}}/>
:
        <Text style={{color:'grey',
        fontSize:wp('4%'),textAlign:'center'}}>
         Resend
        </Text>
                       }
        </TouchableOpacity>
        </View>
  



     </View>
      
       
      
    );
  }


const styles = StyleSheet.create({
  root: {
    flex:1,backgroundColor:'rgba(9,132,226,1)'
  },
  
});
