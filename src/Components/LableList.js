import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon }  from "react-native-elements";
import RoundList from './RoundList'
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";

const  LableList=(props)=>  {
 
    return (
      
            <View style={props.ContainerStyle}>
 
           <View style={styles.ViewStyle}>
             <Text style={props.firstStyle}>{props.FirstItem}</Text>
               <Text style={props.firstStyle}>{props.SecondItem}</Text>
             <Text style={props.firstStyle}>{props.ThirdItem}</Text>
           
           </View>

          <View style={styles.ViewStyle}>
            <Text style={props.secondStyle}>{props.ForthItem}</Text>
               <Text style={props.secondStyle}>{props.FivethItem}</Text>
              <Text style={props.secondStyle}>{props.SixethItem} </Text>
           
           </View>
 
         { props.ShowRoundList &&
          //  <TouchableOpacity style={styles.BottomView}>
          <RoundList  ShowIcon = {true} Title ={props.RoundTitle} ButtonStyle={props.ButtonRound} ImageIcon={props.ImageIcon}
          TitleStyle={props.TitleStyle}
          />
          // </TouchableOpacity>
        }

         </View>

    );
  
}

const  styles= StyleSheet.create({
  // ContainerStyle:{
  //   width:wp('90%'),height:hp('15%'),marginLeft:wp('5%'),
  //   marginRight:wp('5%'),backgroundColor:'white'
  //   ,position:'absolute',bottom:-hp('7%'),borderRadius:20
  // },
    ViewStyle:{
        flexDirection:'row',height:'45%',justifyContent:'space-between'
        ,alignItems:'center'
        //,width:'90%',marginLeft:'5%',marginRight:'5%',
    },
    
})
export default LableList;