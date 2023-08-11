import React, { Component } from "react";
import { StyleSheet, View, TextInput ,TouchableOpacity,Image} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import ImageComponent from "./ImageComponent";
import {Address} from './../API/Address'
import { Text } from '@ui-kitten/components';
import { List  } from 'react-native-paper';
const  SmallProgram=(props)=>  {
 
    return (
        <View style={props.rootView}>
        <TouchableOpacity style={styles.Touchstyle}
        onPress={props.ButtonOperator}>
        
         <ImageComponent source={{uri:Address.URL +props.ImageURL}}
        style={{width:'100%',height:'100%',
        overflow: 'hidden'}} 
        resizeMode='stretch'/> 
     
       </TouchableOpacity>
       
             <List.Item
    title={props.Title}
    
    // titleEllipsizeMode = 'tail'
    // descriptionEllipsizeMode='tail'
    // descriptionNumberOfLines={1}
    titleStyle={styles.TitleText}
        />
       
       </View>
    );
  
}

const  styles= StyleSheet.create({
    // rootView:
    // {
    //     width:wp('92%'),height:hp('40%'),marginHorizontal:wp('4%')
    // },
    Touchstyle:
    {
        
        width:'100%',height:80,borderWidth:1,
        borderColor:'transparent',borderRadius:10,overflow:'hidden',elevation:5
    },
    IconView:
    {
        position:'absolute',left:0,top:0,width:wp('15%'),height:wp('15%')
        ,borderRadius:5,overflow:'hidden',backgroundColor:'#ad1456',justifyContent:'center',alignItems:'center'
    },
    TitleView:
    {
        justifyContent:'flex-start',alignItems:'flex-start'
    },
    TitleText:
    {
        color:'#ad1456',fontFamily:'Roboto-Regular',textAlign:'center',textTransform: 'capitalize',fontSize:13
    },
    DetailsView:
    {
        justifyContent:'flex-start',alignItems:'flex-start'
    },
    DetailsText:
    {
        color:'#ad1456',fontFamily:'Roboto-Regular',textTransform: 'capitalize'
    },
    NameView:
    {
        width:'30%',height:40,position:'absolute',alignItems:'center',justifyContent:'center',
        right:0,top:'10%',borderTopLeftRadius:20,borderBottomLeftRadius:20,backgroundColor:'#ad1456'
    },
    NameText:
    {
        color:'white',fontSize:wp('2.5%'),fontFamily:'Roboto-Regular'
    }
  
})
export default SmallProgram;