import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity, FlatList} from "react-native";

import { Icon }  from "react-native-elements";
import Modal from 'react-native-modal';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import QRCode from 'react-native-qrcode-svg';
export default CenterModals =(props)=>{

    return (    
    
<Modal isVisible={props.showModal} style={styles.container}
               onBackdropPress={props.closeModal}
              >
    
                <View style={styles.ViewContainer}>

                 <QRCode
      value={props.QRCodeData}
      size={wp('35%')}
      style={{justifyContent:'center',alignItems:'center'}}
        />
          <Text style={styles.TextStyle}>Please Scan the QR Code</Text>
 
</View>

</Modal>   


    );
  }


  const styles = StyleSheet.create({
    container: {
        width:wp('90%'),marginHorizontal:wp('5%'),borderRadius:15
      },
      ViewContainer:
      {
        borderColor: 'white',
        height:hp('40%'),width:'100%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:15
      },
    TopView:
    {
      height:hp('45%')
    },
    BottomView:
    {
      height:hp('50%'),borderTopColor:'#ad1456',borderTopWidth:2
          ,borderTopLeftRadius:40,borderTopRightRadius:40,justifyContent:'center',alignItems:'center',width:wp('99.6%')
          ,marginHorizontal:wp('0.2'),borderWidth:2,borderColor:'#ad1456'
     },
     TextStyle:
     {
       textAlign:'center',fontSize:wp('5%'),color:'#ad1456',paddingTop:20
     },

  
  
  })
