import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Image} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
const ColorRange=[
      '#ec624e', '#ec654c', '#ed674b', '#ed6a49', 
      '#ee6d47', '#ef7145', '#ef7443', '#f07841']

const Headers =(props)=>{
 
  let openDrawer=()=>{
    props.drawers.current._root.open()
  }
  
  let closeDrawer=()=>{
    props.drawers.current._root.close()
  }



    return (
      <>
       {props.showLinear ?
        
        <View style={{height:hp('21%'),backgroundColor:'white'}}>
        
 <LinearGradient colors={ColorRange} style={{height:('100%')}}>

        <View style={styles.TopScreenStyle}>
          {props.ShowHeader ? 
          <TouchableOpacity style={{margin:5}} onPress={()=>{openDrawer()}}>
          <Icon name='grid' type='entypo' size={hp('4%')} color='white' 
          
             /> 
          </TouchableOpacity>
:
<TouchableOpacity style={{margin:5}} onPress={()=>{props.navigation.goBack()}}>
<Icon name='arrow-back-sharp' type='ion-icon' size={hp('4%')} color='white' 
 
   /> 
</TouchableOpacity>

}
          <TouchableOpacity style={{margin:5}}>
          <Icon name='search' size={hp('4%')} color='white' />  
          </TouchableOpacity>
        </View>
<View style={styles.TitleScreenStyle}>
  <Text style={{color:'white',fontSize:wp('5%'),fontWeight:'bold'}}>{props.TitleScreen}</Text>
  </View>
  </LinearGradient>
  </View>
  
:
<View style={{height:hp('18%'),backgroundColor:'white'}}>
<View style={styles.TopScreenStyle}>
{props.ShowHeader ? 
          <TouchableOpacity style={{margin:5}} onPress={()=>{openDrawer()}}>
          <Icon name='grid' type='entypo' size={hp('4%')} color='#ef7145' 
            
             /> 
          </TouchableOpacity>
:
<TouchableOpacity style={{margin:5}} onPress={()=>{props.navigation.goBack()}}>
<Icon name='arrow-back-sharp' type='ion-icon' size={hp('4%')} color='#ef7145' 
  
   /> 
</TouchableOpacity>

}
<TouchableOpacity style={{margin:5}}>
<Icon name='search' size={hp('4%')} color='#ef7145' />  
</TouchableOpacity>
</View>
<View style={styles.TitleScreenStyle}>
<Text style={{color:'#ef7145',fontSize:wp('5%'),fontWeight:'bold'}}>{props.TitleScreen}</Text>
</View>
</View>
         }
  </>
    );

}
const  styles= StyleSheet.create({
  TopScreenStyle:{
      flexDirection:'row',justifyContent:'space-between',height:'40%',width:wp('100%')
      
  },
  TitleScreenStyle:{
    height:'60%',width:wp('100%'),marginLeft:20
  }
})
export default Headers;
