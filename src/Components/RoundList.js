import React, { Component } from "react";
import { StyleSheet, View, Text ,TouchableOpacity,Image} from "react-native";
import { Icon }  from "react-native-elements";
// import { Text } from '@ui-kitten/components';
const  RoundList=(props)=>  {
 
    return (
        <TouchableOpacity style={props.ButtonStyle}
        onPress={props.ButtonOperator}
        disabled={props.disabled}
        >

            { props.ShowIcon &&
         <View style={[styles.IconStyleInline,props.IconStyle]}>
          <Icon name={props.ImageIcon}  size={props.IconSize}
           type={props.IconType} color={props.IconColor} />
         </View>
           }
            { props.ShowImage &&
         <View style={styles.ImageStyle}>
          <Image source={{uri:props.uri}} style={props.ImageStyle} />
         </View>
           }
           {
               <View style={{justifyContent:'center',alignItems:'center',paddingLeft:props.ShowIcon ?10 : 0}}>
         <Text style={props.TitleStyle} category='h7'>
             { props.Title }
         </Text>
         </View>
           }
       </TouchableOpacity>
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
export default RoundList;