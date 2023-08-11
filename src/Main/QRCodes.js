import React, { useState } from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import QRCode from 'react-native-qrcode-svg';

export default QRCodes=(props)=>{
  
  return (

    <View style={[styles.container]}>
    
        <QRCode
      value="http://awesome.link.qr"
      size={wp('35%')}
        />
          <Text style={styles.TextStyle}>Please Scan the QR Code</Text>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,justifyContent:'center',alignItems:'center'
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
   }


})