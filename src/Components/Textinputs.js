import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const ColorRange=[
  '#0abdd8', '#00b7e5', '#00aff0', '#3da5f6','#6a99f6','#8696f6',
   '#9f92f3','#b68eee','#c795f1','#d79cf4','#e7a4f6','#f5acf9']
export default class TextInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ShowIcon:false
    };
  }
  render() {
    return (
     
      <View style={[styles.root,this.props.style]}>
         {/* <TouchableOpacity onPress={this.props.TextPress}
          disabled={this.props.Edit}
         style={[{},this.props.TouchStyle]}> */}
         <View style={{flexDirection: "row-reverse",justifyContent:'space-between'
         ,alignItems:'center'}}>
            {!this.props.showIcon &&
           <View style={[{borderRadius:hp('2.5%'),width:hp('5%'),
            height:hp('5%'),backgroundColor:'#000051'
            ,justifyContent:'center',alignItems:'center'},this.props.IconView]}>
            
         <Icon name={this.props.IconName} type={this.props.IconType}
          color={this.props.IconColor}/>
              
          </View>
        }
         <TextInput placeholder={this.props.placeHolder} 
         style={[styles.inputStyle,this.props.TextStyle]}
            multiline={this.props.MultiLine}
          onChangeText={this.props.changeText}
          placeholderTextColor={this.props.placeholderTextColor == null ? 'white':this.props.placeholderTextColor}
           value={this.props.values}
           secureTextEntry={this.props.secure}
            editable={this.props.Edit}
            keyboardType = {this.props.keyboardtype}

          
          />
          </View>
          {/* </TouchableOpacity> */}

       <View style={[{width:'100%',height:1,
       backgroundColor:'#1DE9B6'
       },this.props.BottomLine]}>

     </View> 
     { 
           <Text style={[{color:'red'
           ,fontSize:wp('3%'),marginBottom:'10%'},this.props.ErrorTitleStyle]}>{this.props.ErrorTitle}</Text>
        }
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  root: {
  //  flex: 1,
    // backgroundColor: "white",
  
   

  },
  iconStyle: {
    // color: "#616161",
    // fontFamily: "roboto-regular",
    // fontSize: 24,
    // paddingRight: 10
  },
  inputStyle: {
    // flex: 1, 
    textAlign:'right',
    // color:'white',
    // borderColor: "white",
    // borderWidth: 1,
    // borderRadius:5,marginBottom:5,marginTop:5
   
  }
});
