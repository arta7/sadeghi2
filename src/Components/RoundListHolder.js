import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Image} from "react-native";
import { Icon }  from "react-native-elements";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const  RoundListHolder=(props)=>  {
 
    return (
        <SkeletonPlaceholder >
        <View style={props.ButtonStyle}>
        
               <View style={{justifyContent:'center',alignItems:'center',paddingLeft:props.ShowIcon ?10 : 0}}>
         <Text style={props.TitleStyle}>
            
         </Text>
         </View>
           
       </View>
       </SkeletonPlaceholder >
    );
  
}

const  styles =(props)=> StyleSheet.create({
    ViewStyle:{
       width:'auto',flexDirection:'row'
    },
    ImageStyle:
    {
        justifyContent:'center',alignItems:'center'
    },
    IconStyleInline:
    {
        justifyContent:'center',alignItems:'center'
    },
    ViewTitleStyle:
    {
        justifyContent:'center',alignItems:'center',paddingLeft:props.ShowIcon ?10 : 0
    }
})
export default RoundListHolder;