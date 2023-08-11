import React, { useState,useEffect } from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Controls from './../Main/Main'
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FitImage from 'react-native-fit-image';
import Buttons from '../Components/Buttons'
const slides = [
  {
    key: 1,
    title: 'Title',
    text: 'Details ',
    image: '',
    // backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title',
    text: 'Details ',
    image: '',
    // backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Title',
    text: 'Details ',
    image: '',
    // backgroundColor: '#22bcb5',
  }
];
 
export default  SplashIntro=(props)=> {

  const[showRealApp,setshowRealApp]=useState(false)
  const[showMain,setshowMain]=useState(false)

  let CheckAsyncData=async()=>{
    var FirstLoad = await AsyncStorage.getItem('FirstLoad')
    var IsLogin = await AsyncStorage.getItem('IsLogin')
    var LoginData = await AsyncStorage.getItem('LoginData')
    
   if(FirstLoad != null && FirstLoad != '' && IsLogin != null && IsLogin !='' )
    {
      setshowRealApp(true)
      setshowMain(true)
    }
    else 
    {
      setshowRealApp(true)
      
    }
  }



  useEffect(()=>{
    CheckAsyncData()
    },[])

 let _renderItem = ({ item }) => {
    return (
      <View style={{flex:1}}>  
      <View style={{width:'100%',height:hp('20%'),marginTop:'10%'}}>  
         <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
      </View> 
      <View style={styles.slide}>

        <FitImage
source={item.image}
style={styles.image} 
resizeMode='contain'
/>

        { item.key ==3 && 
 
        <Buttons
      ButtonStyle={{backgroundColor:'#ad1456'
      ,width:wp('40%'),marginHorizontal:wp('30%'),
      borderRadius:15,height:40,marginTop:30,
      justifyContent:'center',alignItems:'center'
      }}
      titleStyle={{color:'white',fontSize:wp('3.5%'),textAlign:'center'}}
      titleText='Done'
      ButtonOperator={()=>{_onDone()}}/>
        }
      </View>
      </View>
    );
  }
  _onDone = () => {
    AsyncStorage.setItem('FirstLoad','1')
   props.navigation.replace('Login')

  }
     
      return (
        <>
        {
          !showRealApp ?
        <View style={{flex:1}}></View>
        :
        !showMain ?

      <AppIntroSlider renderItem={_renderItem} 
      data={slides} 
      activeDotStyle={{backgroundColor:'#ad1456'}}
      showNextButton={false}
      showDoneButton={false}
      />
      :
        <Controls navigation={props.navigation}/>
        }
      </>
      )
      

  }
  
  const styles = StyleSheet.create({
    slide: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center',height:hp('50%')
    },
    image: {
      width: wp('60%'),
      height: hp('50%')
    },
    text: {
      color: '#ad1456',
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      color: '#ad1456',
      textAlign: 'center',
    },
  });