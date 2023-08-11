import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Image} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import ImageComponent from "./ImageComponent";
import {Address} from '../API/Address'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const  SmallProgramHolder=(props)=>  {
 
    return (
        
        <SkeletonPlaceholder >
        <View style={props.rootViewSmallProgramStores}>
        <TouchableOpacity style={styles.Touchstyle}>
        
         <ImageComponent source={{uri:''}}
        style={{width:'100%',height:'100%',
        overflow: 'hidden'}} 
        resizeMode='stretch'/> 
     
       </TouchableOpacity>
       <View style={props.ViewDirectionStores}>
         <View style={styles.TitleView}>
             <Text style={styles.TitleText}></Text>
         </View>
         </View>
       </View>
       </SkeletonPlaceholder>
    );
  
}

const  styles= StyleSheet.create({
 

    Touchstyle:
    {
        
        width:'100%',height:'70%',borderWidth:1,
        borderColor:'transparent',borderRadius:10,overflow:'hidden',elevation:5
    },
    IconView:
    {
        position:'absolute',left:0,top:0,width:wp('15%'),height:wp('15%')
        ,borderRadius:5,overflow:'hidden',backgroundColor:'#ad1456',justifyContent:'center',alignItems:'center'
    },
    TitleView:
    {
        justifyContent:'flex-start',alignItems:'flex-start',width:wp('20%'),height:40,backgroundColor:'gray',borderRadius:10,marginTop:10
    },
    TitleText:
    {
        color:'#ad1456',fontSize:wp('3%'),textTransform: 'capitalize'
    },
    DetailsView:
    {
        justifyContent:'flex-start',alignItems:'flex-start'
    },
    DetailsText:
    {
        color:'#ad1456',fontSize:wp('4%'),textTransform: 'capitalize'
    },
    NameView:
    {
        width:'30%',height:40,position:'absolute',alignItems:'center',justifyContent:'center',
        right:0,top:'10%',borderTopLeftRadius:20,borderBottomLeftRadius:20,backgroundColor:'#ad1456'
    },
    NameText:
    {
        color:'white',fontSize:wp('2.5%')
    }
  
})
export default SmallProgramHolder;