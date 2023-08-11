import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon,Avatar }  from "react-native-elements";
import Avatars from './Avatars';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const  ScreenChoose=(props)=>  {
 
    return (
        <TouchableOpacity style={props.ButtonStyle}
        onPress={props.ButtonOperator}>
         <Text style={props.TitleStyle}>
             { props.Title }
         </Text>
         
 
         <Avatar 
         rounded 
        //  icon={{ name: props.Icon,color:'white'}}
         source={{
            uri:
              props.Icon
          }}
         activeOpacity={0.9}
         size={hp('9%')}
         containerStyle={{marginLeft:15,opacity:0.8,marginTop:hp('1%')}}
         avatarStyle={{resizeMode:'stretch'}}
         />
         {/* </View> */}

       </TouchableOpacity>
    );
  
}
export default ScreenChoose;

