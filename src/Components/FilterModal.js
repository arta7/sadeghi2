import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator, FlatList,Switch
} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon} from 'react-native-elements'
import Modal from 'react-native-modal';
import RoundList from './RoundList'
import Textinputs from './Textinputs'
import Buttons from './Buttons'


const FilterModal =(props)=>{
     const[showService,setshowService] = useState(false)

  return (
    <Modal isVisible={props.showModal} style={{alignItems:'center'}}
    onBackdropPress={()=>{props.changeModal(false)}}
    >

<View style={{backgroundColor:'white',borderRadius:15,
width:wp('80%'),marginHorizontal:wp('10%'),height:hp('80%')}}>
  <ScrollView>
<View style={{width:'100%',height:('5%')}}>
  <Text style={{color:'#EA5455',fontSize:wp('2.5%'),paddingLeft:10,paddingTop:5}}>Filter Search</Text>
 </View>



<View style={{width:'100%',
               height:hp('10%'),borderBottomWidth:0.4,borderBottomColor:'gray',marginTop:5}}>
     <FlatList 
         data={props.CategoryList}
         horizontal={true}
         showsHorizontalScrollIndicator={true}
         renderItem={({item,index}) =>  
         <RoundList ShowIcon={false}    
         Title={item.serviceName}
         ButtonStyle={{borderWidth:1
        ,borderRadius:20,borderColor:item.color
       ,backgroundColor:item.color,
        paddingLeft:wp('5%'),paddingRight:wp('5%'),margin:5,height:'60%'
        ,justifyContent:'center',alignItems:'center',alignSelf:'center'}}
       TitleStyle={{fontSize:wp('3%'),textAlign:'center',color:'white'}}
       />
         }

         />

       </View>


<Textinputs
      //  placeHolder = 'Phone Number or Email'
       changeText = {(value)=> props.setSelectData(value)}
       values = 'test'//{props.SelectData}
       Title='Service Category'
       TitleStyle={{fontSize:wp('2.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10}}
       Edit={false}
       TextPress={()=>{setshowService(true)}}
       TextStyle={{color:'black',textAlign:'left',width:'80%',marginHorizontal:'10%',
       fontSize:wp('2.5%'),backgroundColor:'white',elevation:5,borderWidth:1}}
       TouchStyle={{height:hp('7%')}}

     />


<View style={{marginTop: hp('2%'), width: '100%'
         , flexDirection: 'row',marginLeft:20}} onPress={()=>{}}>
           <View style={{flexDirection:'row',width:'50%'}}>
              <Text></Text>
             <Text style={{color:'black', textAlignVertical: 'center', fontSize: wp('3%')}}>Only Online Providers</Text>
             </View>
           <View style={{width: '45%',justifyContent:'center'}}>
           <Switch  
            // value={switchValue}  
            // onValueChange ={(switchValue)=>setswitchValue(switchValue)}
            // style={props.switchStyle}
            // thumbColor= {switchValue  ? 'red' : 'gray'}
           /> 
           </View>
         </View>


         <View style={{marginTop: hp('2%'), width: '100%'
         , flexDirection: 'row',marginLeft:20}} onPress={()=>{}}>
           <View style={{flexDirection:'row',width:'50%'}}>
              <Text></Text>
             <Text style={{color:'black', textAlignVertical: 'center', fontSize: wp('3%')}}>Only Company Providers</Text>
             </View>
           <View style={{width: '45%',justifyContent:'center'}}>
           <Switch  
            // value={switchValue}  
            // onValueChange ={(switchValue)=>setswitchValue(switchValue)}
            // style={props.switchStyle}
            // thumbColor= {switchValue  ? 'red' : 'gray'}
           /> 
           </View>
         </View>


         <View style={{marginTop: hp('2%'), width: '100%'
         , flexDirection: 'row',marginLeft:20}} onPress={()=>{}}>
           <View style={{flexDirection:'row',width:'50%'}}>
              <Text></Text>
             <Text style={{color:'black', textAlignVertical: 'center', fontSize: wp('3%')}}>Only Truested Providers</Text>
             </View>
           <View style={{width: '45%',justifyContent:'center'}}>
           <Switch  
            // value={switchValue}  
            // onValueChange ={(switchValue)=>setswitchValue(switchValue)}
            // style={props.switchStyle}
            // thumbColor= {switchValue  ? 'red' : 'gray'}
           /> 
           </View>
         </View>

         <Textinputs
      //  placeHolder = 'Phone Number or Email'
       changeText = {(value)=> props.setSelectData(value)}
       values = 'test'//{props.SelectData}
       Title='Package Types'
       TitleStyle={{fontSize:wp('2.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:hp('3%')}}
       Edit={false}
       TextPress={()=>{}}
       TextStyle={{color:'black',textAlign:'left',width:'80%',marginHorizontal:'10%',
       fontSize:wp('2.5%'),backgroundColor:'white',elevation:2,borderWidth:1}}
       TouchStyle={{height:hp('7%')}}

     />

     <View style={{}}>

     </View>

         <Buttons titleText='Filter' ButtonStyle=
         {{width:'80%',marginHorizontal:'10%',
         height:hp('7%'),justifyContent:'center'
         ,alignItems:'center',marginTop:hp('3%'),elevation:2
         ,borderRadius:10,marginBottom:20}}
         titleStyle={{fontSize:wp('4%'),color:'#ef7145'}}
         />

</ScrollView>
</View>



<Modal isVisible={showService} style={{alignItems:'center'}}
    onBackdropPress={()=>{setshowService(false)}}>
    <View style={{backgroundColor:'red',height:hp('30%'),width:'80%',marginHorizontal:'10%'}}>
      </View> 
  </Modal>

</Modal>


  




  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })



export default FilterModal;


