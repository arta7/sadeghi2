import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator, FlatList
} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon,Avatar,ListItem} from 'react-native-elements'
import Modal from 'react-native-modal';
import Textinputs from './Textinputs';
import Buttons  from './Buttons';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
const ColorRange=[
  '#eb5853', '#eb5b52', '#ec5d50', '#ec604f',
     '#ec624e', '#ec654c', '#ed674b', '#ed6a49', 
     '#ee6d47', '#ef7145', '#ef7443', '#f07841']

const PaymentModal =(props)=>{
    

  return (
    <Modal isVisible={props.showModal} style={[{justifyContent: 'center',
    width:wp('70%')
    ,marginRight:'15%',marginLeft:'15%'
                   },props.ModalStyle]}
                  //  onBackdropPress={props.closeModal}
                  >
        <View style={[{
                borderRadius: 10,
                borderColor: 'white',
                height:hp('60%'),width:'100%'
                },props.ViewStyle]}>
                   <LinearGradient colors={ColorRange} 
                   style={{backgroundColor: 'white',
                   borderRadius: 10,borderWidth:0.5,
                   borderColor: 'white',width:'100%',elevation:5,height:'100%'}}> 
                    

                   <View style={{width:'100%',height:('8%'),marginTop:5}}>
                    <Text style={{fontSize:wp('3%'),color:'black',textAlign:'right',paddingRight:10}}>{props.Title}</Text>
                   </View>
                   <View style={{width:'100%',height:('12%'),marginRight:20}}>
                     <Text style={{fontSize:wp('4%'),color:'black'}}>قیمت</Text>
                     <Text style={{fontSize:wp('5%'),color:'#4CD41D',textAlignVertical:'center',
                     textDecorationLine: props.showCode ? 'line-through' : null, textDecorationStyle:props.showCode 
                     ?  'solid' : null
                     
                     }}>{props.Price} تومان</Text>
                     {
                       props.showCode &&
                       <Text style={{fontSize:wp('5%'),color:'red'}}>{props.NewPrice}</Text>
                     }
                   </View>
                   <View style={{width:'100%',height:('5%'),marginRight:20}}>
                     <Text style={{fontSize:wp('4%'),color:'black'}}> کد تخفیف </Text>
                   </View>
                   <View style={{width:'100%',
                   flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',height:('12%')}}>
                     <TextInput 
                     style={{color:'black',width:'80%',marginRight:'2%',
                     fontSize:wp('3.5%'),backgroundColor:'grey',elevation:5,borderRadius:10,color:'white'}}
                     />
                      <Buttons 
                      titleText = '+'
                      titleStyle={{textAlign:'center',color:'red'}}
                      ButtonStyle = {{
                        borderRadius:10,borderColor:'red',
                        borderWidth:1,backgroundColor:'white'
                        ,width:'10%',height:40
                        ,elevation:5,justifyContent:'center',alignItems:'center',marginLeft:'4%' 
                      }}
                      />
                     </View>

                   <View style={{width:'80%',marginHorizontal:'10%',height:('9%'),justifyContent:'flex-start'
                   ,paddingLeft:10,borderRadius:10
                   ,backgroundColor:'#E7FDD6',flexDirection:'row-reverse',alignItems:'center',elevation:5}}>
                     <Icon  name='information-outline' type='material-community' color='#4CD41D' />
                     <Text  style={{fontSize:wp('3.5%'),color:'#4CD41D',marginLeft:10}}>موجودی شما  {props.Credit} تومان </Text>
                   </View>


                   <View style={{width:'100%',height:('20%'),justifyContent:'center',alignItems:'center'}}>
                     <Text style={{fontSize:wp('4%'),color:'black'}}>قیمت تمام شده</Text>
                     <Text style={{fontSize:wp('5%'),color:'#4CD41D'}}>{props.TotalPrice}</Text>
                   </View>



                   {/* <View style={{width:'100%',flex:0.15,marginLeft:10}}> */}
                   <Buttons 
                      titleText = 'پرداخت'
                      titleStyle={{textAlign:'center',color:'black'}}
                      ButtonStyle = {{
                        borderRadius:10,
                        backgroundColor:'white'
                        ,width:'50%',height:60
                        ,elevation:5,justifyContent:'center',alignItems:'center',alignSelf:'center',marginRight:'4%' 
                      }}
                      ButtonOperator = {()=>{
                        props.closeModals()
                      
                      }}
                      />
                   {/* </View> */}


                   </LinearGradient>
                   </View>
        
     
       </Modal>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })



export default PaymentModal;


