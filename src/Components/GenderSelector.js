import React, { Component } from "react";
import { StyleSheet, View, TextInput ,TouchableOpacity,Text} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const  GenderSelector=(props)=>  {
 
    return (
        <TouchableOpacity style={{width:wp(20),height:50,flexDirection:"row-reverse",
        justifyContent:'space-between',alignItems:'center',borderRadius:10,backgroundColor:'rgba(9,132,226,1)',marginHorizontal:5,padding:10}}
        onPress={props.Press}
        >
            <Text style={{textAlign:'center',fontSize:wp(4),color:props.Selected == true ? '#ad1456' : 'white'}}>
                {
                    props.Title
                }
            </Text>
                
            <Icon name={props.IconName} type={props.IconType}  color={props.Selected == true ? '#ad1456' : 'white'} size={30}/>
       
       </TouchableOpacity>
    );
  
}


export default GenderSelector;