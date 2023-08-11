import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Switch} from "react-native";
import { Icon }  from "react-native-elements";
const  SwitchChoose=(props)=>  {
 
    return (
        <TouchableOpacity style={props.ButtonStyle}
        onPress={props.ButtonOperator}>
            <View style={styles.ViewStyle}>
 
          
         <Text style={props.TitleStyle}>
             { props.Title }
         </Text>
         { props.ShowIcon &&
         <View>
          <Image source={{uri:props.ImageIcon}} style={{width:30,height:30}}/>
         </View>
         }


<View >
    {
        props.switch &&
        <Switch  
        value={props.switchValue}  
        onValueChange ={(switchValue)=>props.setswitchValue(switchValue)}
        style={props.switchStyle}
        thumbColor= {props.switchValue  ? '#ef7443' : 'gray'}
        />  
    }
     {
        props.switchIcon &&
         <Icon name='home' size={20} /> 
     }
     
</View>


  </View>

      


       </TouchableOpacity>
    );
  
}

const  styles= StyleSheet.create({
    ViewStyle:{
        flexDirection:'row',justifyContent:'space-between'
    }
})
export default SwitchChoose;