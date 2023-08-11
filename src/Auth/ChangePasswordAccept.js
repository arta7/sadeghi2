import React, { Component, useState,useEffect } from "react";
import { StyleSheet, View, 
    Text,TouchableOpacity,Alert,ScrollView
    ,ActivityIndicator ,BackHandler,Image} from "react-native";
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Textinputs from '../Components/Textinputs'
import Buttons from '../Components/Buttons'
import { Icon }  from "react-native-elements";
import CircleLogo from "../Components/CircleLogo";
import CheckBox from '@react-native-community/checkbox';
import FitImage from 'react-native-fit-image';



export default ChangePasswordAccept = (props) =>{

  let removeItemValue=async(key)=> {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch (exception) {
      return false;
    }
  }
 
  const data = props.navigation.getParam('data', null)
    return (
     <View style={styles.root}>
       
      
    
  
    
 

      <View style={{width:wp('100%'),height:hp('70%'),backgroundColor:'white'
      ,borderBottomLeftRadius:50,borderBottomRightRadius:50
      ,borderBottomWidth:1,borderBottomColor:'transparent'}}>

   
      <View style={{marginTop:5,justifyContent:'center'
       ,alignItems:'center',alignSelf:'center',marginTop:'30%'}}>
      <Text style={{color:'rgba(9,132,226,1)',
        fontSize:wp('8%'),textAlign:'left'}}>
        تغییر رمز عبور
        </Text>
        </View>

        <View style={{marginTop:5,justifyContent:'center'
       ,alignItems:'center',alignSelf:'center',marginTop:'5%',marginBottom:'5%'
       ,marginHorizontal:wp('15%')}}>
      <Text style={{color:'rgba(9,132,226,1)',
        fontSize:wp('4%'),textAlign:'left'}}>
         {data}
        </Text>
        </View>

        <View style={{justifyContent:'center',width:150
      ,height:140,alignItems:'center'
      ,alignSelf:'center'}}>
      <Image
  source={require('./../Images/Tick.png')}
  style={{width:150,height:140}}
  resizeMode='stretch'
/> 
        </View>

        <Buttons
      ButtonStyle={{backgroundColor:'white'
      ,width:wp('40%'),marginHorizontal:wp('30%'),
      borderRadius:15,height:40,marginTop:30,
      justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'rgba(9,132,226,1)'
      ,position:'absolute',bottom:-20
      }}
      titleStyle={{color:'rgba(9,132,226,1)',fontSize:wp('3.5%'),textAlign:'center'}}
      titleText='بازگشت'
      ButtonOperator={()=>{
        removeItemValue('UserData')
        props.navigation.replace('Login')}}
      />

      </View>




 
  



     </View>
      
       
      
    );
  }


const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor:'rgba(9,132,226,1)'
  },
  
});
