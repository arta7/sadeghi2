import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Image} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import ImageComponent from "./ImageComponent";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const  ProgramHolder=(props)=>  {
 
    return (
        <SkeletonPlaceholder >
            <View style={styles.rootViewProgram}>
        <TouchableOpacity style={styles.Touchstyle}>
             <ImageComponent source={{uri:''}}
            style={styles.ImageComponentStyle} 
            resizeMode='stretch'/> 
            
               <TouchableOpacity style={styles.IconView}>
            <ImageComponent source={{uri:''}}
            style={styles.ImageComponentStyle} 
            resizeMode='stretch'/> 
            </TouchableOpacity>
            
          
           </TouchableOpacity>
             <View style={styles.TitleView}>
                 <Text style={styles.TitleText}></Text>
             </View>
             <View style={styles.TitleView}>
                 <Text style={styles.TitleText}></Text>
             </View>
             </View>
             </SkeletonPlaceholder>
    );
  
}

const  styles= StyleSheet.create({
    rootViewProgram:{
        width:wp('88%'),height:hp('33%'),marginHorizontal:wp('1%'),marginBottom:40
    },
  
    Touchstyle:
    {
        width:'100%',height:'75%',borderWidth:1,
        borderColor:'transparent',borderRadius:10,overflow:'hidden',elevation:5
    },
    IconView:
    {
        position:'absolute',left:0,top:0,width:wp('15%'),height:wp('15%')
        ,borderRadius:10,overflow:'hidden',justifyContent:'center',alignItems:'center',borderWidth:1
    },
    TitleView:
    {
        justifyContent:'flex-start',alignItems:'flex-start',width:wp('20%'),height:40,backgroundColor:'gray',borderRadius:10,marginTop:10
    },
    TitleText:
    {
        color:'#ad1456',fontSize:wp('5%')
    },
    DetailsView:
    {
        justifyContent:'flex-start',alignItems:'flex-start'
    },
    DetailsText:
    {
        color:'#ad1456',fontSize:wp('4%')
    },
    NameView:
    {
        width:'30%',height:40,position:'absolute',alignItems:'center',justifyContent:'center',
        right:0,top:'10%',borderTopLeftRadius:20,borderBottomLeftRadius:20,backgroundColor:'#ad1456'
    },
    NameText:
    {
        color:'white',fontSize:wp('2.5%')
    },
    ImageComponentStyle:
    {
        width:'100%',height:'100%',overflow: 'hidden'
    }
})
export default ProgramHolder;