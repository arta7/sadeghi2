import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity, FlatList} from "react-native";

import { Icon }  from "react-native-elements";
import Modal from 'react-native-modal';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
const ColorRange=[
  '#eb5853', '#eb5b52', '#ec5d50', '#ec604f',
     '#ec624e', '#ec654c', '#ed674b', '#ed6a49', 
     '#ee6d47', '#ef7145', '#ef7443', '#f07841']
export default ErrorModal =(props)=>{

    

    return ( 
        
<Modal isVisible={props.showModal} style={{justifyContent: 'center',width:'70%'
,marginRight:'15%',marginLeft:'15%'
               }}
              // onBackdropPress={props.closeModal}
              >
                  <LinearGradient colors={ColorRange} 
                   style={{backgroundColor: '#7505ab',
                   borderRadius: 10,borderWidth:0.5,
                   borderColor: 'white',width:'100%',elevation:5,height:250}}> 

                 <View style={{width:'80%',flex:0.75,marginHorizontal:'10%',justifyContent:'center',alignItems:'center'}}>
                     <Text style={{color:'white',fontSize:wp('4%'),textAlign:'center'}}>{props.ErrorText}</Text>
                   </View>

                   <View style={{width:'100%',borderWidth:1,borderColor:'white'}}>
                   
                   </View>

                    <TouchableOpacity style={{width:'100%',flex:0.3,justifyContent:'center',alignItems:'center'}}
                    onPress={props.closeModal}
                    >
                     <Text style={{color:'white',fontSize:wp('3%'),textAlign:'center'}}>Submit</Text>
                   </TouchableOpacity>
       
              </LinearGradient>
</Modal>

    );
  }


