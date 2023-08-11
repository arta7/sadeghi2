import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import ProgressCircle from 'react-native-progress-circle'
const ColorRange=[
  '#1DE9B6']
export default CircleLogo =(props)=> {
    return (
     
     

      <ProgressCircle
      percent={100}
      radius={(props.circleDiameter)/2}
      borderWidth={5}
      color="blue"
      shadowColor="transparent"
      bgColor="transparent"
  >
       <ProgressCircle
            percent={100}
            radius={(props.circleDiameter)/2}
            borderWidth={7}
            color="rgba(9,132,226,1)"
            shadowColor="transparent"
            bgColor="rgba(9,132,226,1)"
        >
      {props.children}
      </ProgressCircle>
      </ProgressCircle>
       
   
    
    );
  }



