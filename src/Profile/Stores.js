import React, { Component, useState,useEffect,useContext } from "react";
import { StyleSheet, View, 
    TouchableOpacity,Alert,ScrollView
    ,ActivityIndicator ,BackHandler,FlatList,Image,Linking} from "react-native";
import axios from 'axios'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Icon,Rating }  from "react-native-elements";
import ImageComponent from "../Components/ImageComponent";
import Buttons from "../Components/Buttons";
import  ImageHeaderScrollView, {TriggeringView } from 'react-native-image-header-scroll-view';

import { Address } from "../API/Address";
import RoundList from '../Components/RoundList'
import Program from "../Components/Program";
import {  Divider,Text } from '@ui-kitten/components';
import Data from './../Control/Data'

export default Stores = (props) =>{
    const[showIcon,setshowIcon] = useState(false)
    // const value = useContext(Redux);

     const data = props.navigation.getParam('data',null)



   return (
    <View style={styles.root}>
   <ImageHeaderScrollView
     maxHeight={hp('25%')}
     minHeight={hp('10%')}
     contentContainerStyle={{borderRadius:30,bottom:25}}
     fadeOutForeground={true}
     renderFixedForeground={() => (     
      <View style={[styles.renderFixView,{backgroundColor:showIcon ? 'white' : 'transparent'}]}>
         {
           showIcon &&
            <View style={styles.showIconView}>
            <Image source={{uri:Data.image1}}
             style={styles.renderShowIconImage} 
             resizeMode='center'
             />
           </View>
         }
           <TouchableOpacity
            style={{left:'5%',top:'3%'}}
            onPress={()=>{props.navigation.goBack()}}
            >
            <Icon name='arrow-back' color='black' size={wp('6%')}
            
            />
         </TouchableOpacity>

      </View>
     )}

     renderHeader={()=>(
         <>
<View style={styles.showMainImageView}>
    <ImageComponent source={{uri:Data.image1}}
       style={styles.showMainImageView} 
       resizeMode='cover'/>
    </View>

    </>
)}
   >
    
 

    <View  style={[styles.BottomView]}>
       
    <TriggeringView 
    onDisplay={()=>{setshowIcon(false)}}   
    onBeginHidden={() =>{setshowIcon(true)}}
     style={{top:30}}
    >
   
       <View style={styles.rootProgram}>

           <ImageComponent source={{uri:Data.image1}}
               style={styles.ImageComponentBottom} 
               resizeMode='center'
               />
           
        <View style={styles.RatingView}>
       {/* <Rating   startingValue={data.rating}   imageSize={25} readonly ratingBackgroundColor='#ad1456' /> */}
        </View>
        
            <View style={{marginTop:40}}>

            </View>
      {/* Title */}
      <Text style={styles.TitleText} category='h5'>{data.name}</Text>
      <Text style={styles.DetailsText} category='s1'> {data.info}</Text>


       <Divider style={styles.divider} />


   { data.google != null &&

       <View >

         <View style={styles.DetailsView}>
           <Icon  name= 'place'  color='black'/>
           <Text style={styles.DetailsText} category='s1'> {data.google.result.formatted_address}</Text>
         </View>


        
           <View style={styles.DetailsView}>
           <Icon  name= 'phone'  color='black'/>
           <Text style={styles.DetailsText} category='s1'> {data.google.result.international_phone_number}</Text>
         </View>

    
     <View style={styles.DetailsView}>
           <Icon  name= 'star-border'  color='black' />
           <Rating   startingValue={data.google.result.rating}   imageSize={20} readonly ratingBackgroundColor='#ad1456' />
         </View>

            <View style={styles.DetailsView}>
           <Icon  name= 'calendar-today'  color='black' />
           <FlatList
       data={data.google.result.opening_hours.weekday_text}
       renderItem={({item,index})=>
       <Text style={styles.DetailsText} category='s1'> {item} </Text>
       }
       />
           
         </View>

 

             <Divider style={styles.divider} />
    </View>
   }
    

       <Text style={styles.TitleText} category='h5'>Offers</Text>
        
  
        <FlatList
       data={data.programs}
       renderItem={({item,index})=>
       <View style={{marginTop:10}}>
       <Program 
       Title={item.name}
       Details={item.info}
       showIcon={true}
       rootView={styles.rootViewProgram}
       URLImage = { item.photo != null ? item.photo.url : ''}
       URLIcon={data.icon.url}
       ButtonOperator={()=>{
          
           props.navigation.navigate('StoreProgram',{data:item})
        }}
      />
       <View >
       <Divider style={styles.divider} />
         </View>
      </View>
       }
        />

       </View>
    

     </TriggeringView>
   
</View>
     


  

     </ImageHeaderScrollView>
 






    </View>
     
      
     
   );
 }


const styles = StyleSheet.create({
 root: {
  flex:1,backgroundColor:'#ad1456',overflow:'hidden'
 },
 rootProgram:
 {
     width:wp('90%'),marginHorizontal:wp('5%')
 },
 BottomView:
 {
     flex:1
   //width:wp('100%'),height:hp('140%')
   
 },
 BottomIconView:
 {
   left:'10%',top:-hp('20%'),position:'absolute',
   width:wp('20%'),height:wp('20%'),borderRadius:10, alignSelf: 'stretch',
   backgroundColor:'white',overflow:'hidden',justifyContent:'center',alignItems:'center'
 },
 TitleView:
 {
     justifyContent:'flex-start',alignItems:'flex-start',marginBottom:5
 },
 RatingView:
 {
     justifyContent:'flex-end',alignItems:'flex-end',marginRight:10
 },
 TitleText:
 {
     color:'black',textTransform: 'capitalize',fontFamily:'Roboto-Regular'
 },
 DetailsView:
 {
    flexDirection:'row'
 },
 DetailsText:
 {
     color:'black',margin:2,fontFamily:'Roboto-Regular'
 },
 ButtonStyle:
 {
     backgroundColor:'#ad1456'
     ,width:wp('40%'),marginHorizontal:wp('30%'),
     borderRadius:15,height:40,
     justifyContent:'center',alignItems:'center',
     borderWidth:1,borderColor:'#ad1456',bottom:'3%',position:'absolute'
   },
   ButtonTitleStyle:
   {
   color:'white',fontSize:wp('4%'),textAlign:'center',textTransform: 'capitalize',fontFamily:'Roboto-Regular'
   },
   renderFixView:
   {
       flexDirection:'row',height:hp('13%'),width:wp('100%')
   },
   showIconView:
   {
       width:wp('12%'),height:wp('12%'),borderRadius:10,justifyContent:'center'
            ,alignItems:'center',marginHorizontal:wp('44%')
            ,position:'absolute',top:'10%'
   },
   renderShowIconImage:
   {
       width:'100%',height:'100%',overflow:'hidden',borderRadius:10
   },
   showMainImageView:
   {
       width:wp('100%'),height:'100%'
   },
   ImageComponentTop:
   {
       left:'10%',bottom:-hp('5%'),position:'absolute',
       width:wp('20%'),height:wp('20%'),borderRadius:10,
       backgroundColor:'white',overflow:'hidden',justifyContent:'center',alignItems:'center'
   },
   ImageComponentBottom:
   {
       left:'10%',margin:-hp('3%'),position:'absolute',
       width:wp('20%'),height:wp('20%'),borderRadius:10,
       backgroundColor:'white',overflow:'hidden',justifyContent:'center',alignItems:'center'
   },
   RoundStyle:
   {
       borderWidth:1
       ,borderRadius:20,borderColor:'transparent'
      ,backgroundColor:'#ad1456',
       padding:wp('3%'),margin:5,height:30
       ,justifyContent:'center',alignItems:'center',marginBottom:10
   },
   RoundStyleTags:
   {
       borderWidth:1
       ,borderRadius:20,borderColor:'transparent'
      ,backgroundColor:'#ad1456',
       padding:wp('3%'),margin:5,height:30
       ,justifyContent:'center',alignItems:'center',marginBottom:10
   },
   RoundTitleStyle:
   {
       fontSize:wp('4%'),textAlign:'center',color:'white',textTransform: 'capitalize',fontFamily:'Roboto-Regular'
   },
   rootViewProgram:{
    width:wp('88%'),marginHorizontal:wp('1%')
    },
    SepratorStyle:
    {
        width:wp('90%'),marginRight:wp('5%'),height:1,elevation:1,borderColor:'transparent',borderWidth:0.5,marginVertical:3
    },
    divider:
    {
        alignSelf : 'stretch', backgroundColor : '#dedddc',marginVertical:5
    }
 
});
