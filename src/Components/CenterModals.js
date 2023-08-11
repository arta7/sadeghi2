import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity, FlatList} from "react-native";

import { Icon }  from "react-native-elements";
import Modal from 'react-native-modal';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';


export default CenterModals =(props)=>{
    return ( 
      <>
      {    
         <Modal isVisible={props.showModal} 
         style={[{justifyContent: 'center',
         width:wp('90%')
         ,marginHorizontal:wp('5%'),height:500
                        },props.ModalStyle]}
                        onBackdropPress={props.closeModal}>
                         <View style={[{
                         borderRadius: 10,
                         borderColor: 'white',
                         height:500,width:'100%',padding:10,backgroundColor:'white'
                         },props.ViewStyle]}>

                            {
                              props.Children
                            }
         </View>
         
         </Modal> 
        


}



</>

    );
  }


