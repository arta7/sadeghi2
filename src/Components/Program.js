import React, { Component } from "react";
import { StyleSheet, View, TextInput ,TouchableOpacity,Image} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import ImageComponent from "./ImageComponent";
import {Redux} from './../Control/Data'
import {Address} from './../API/Address'
import { Text } from '@ui-kitten/components';
import { List  } from 'react-native-paper';
const  Program=(props)=>  {
 
    return (
        <View style={props.rootView}>
        <TouchableOpacity style={[styles.Touchstyle,props.TouchPropsStyle]}
        onPress={props.ButtonOperator}>
            <ImageComponent source={{uri:Address.URL + props.URLImage}}
        style={styles.ImageComponentStyle} 
        resizeMode='stretch'/> 
        { props.showIcon &&
           <TouchableOpacity style={styles.IconView}>
        <ImageComponent source={{uri:Address.URL + props.URLIcon}}
        style={styles.ImageComponentStyle} 
        resizeMode='stretch'/> 
        </TouchableOpacity>
        }
        {props.ShowName &&
        <View style={styles.NameView}>
            <Text style={styles.NameText} category='h8'  ellipsizeMode='tail' numberOfLines={1}>{props.Name}</Text>
        </View>
        }
       </TouchableOpacity>
             <List.Item
    title={props.Title}
    description={props.Details}
    titleEllipsizeMode = 'tail'
    descriptionEllipsizeMode='tail'
    descriptionNumberOfLines={1}
    titleStyle={styles.TitleText}
        />
       </View>
    );
  
}

const  styles= StyleSheet.create({
 
    Touchstyle:
    {
        width:'100%',height:160,borderWidth:1,
        borderColor:'transparent',borderRadius:10,overflow:'hidden',elevation:5
    },
    IconView:
    {
        position:'absolute',left:0,top:0,width:60,height:60
        ,borderRadius:10,overflow:'hidden',justifyContent:'center',alignItems:'center',elevation:3
    },
    TitleView:
    {
        justifyContent:'flex-start',alignItems:'flex-start'
    },
    TitleText:
    {
         color:'#000',
        fontFamily:'Roboto-Regular'
       ,textTransform: 'capitalize',fontWeight:'bold'
    },
    DetailsView:
    {
        justifyContent:'flex-start',alignItems:'flex-start'
    },
    DetailsText:
    {
        color:'black',fontFamily:'Roboto-Regular',textTransform: 'capitalize'
    },
    NameView:
    {
        width:'30%',height:40,position:'absolute',alignItems:'center',justifyContent:'center',
        right:0,top:'10%',borderTopLeftRadius:20,borderBottomLeftRadius:20,backgroundColor:'#ad1456',padding:5
    },
    NameText:
    {
        color:'white',fontFamily:'Roboto-Regular'
    },
    ImageComponentStyle:
    {
        width:'100%',height:'100%',overflow: 'hidden'
    }
})
export default Program;