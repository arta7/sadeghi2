import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Image} from "react-native";
import { Icon,ListItem,Avatar }  from "react-native-elements";
import { widthPercentageToDP as wp} from "react-native-responsive-screen";
const  Avatars=(props)=>  {
 
    return (
        <View 
        style={props.ButtonStyle}
        onPress={props.ButtonOperator}
       >
        
         <ListItem >
           <View style={{position:'absolute'}}>
             {
             props.avatar != null 
             ?
  <Avatar
    rounded
    size='medium'
    title={props.AvatarTitle}
    source={{ uri: props.avatar}}
    
  >
      {  props.Accessory &&
    <Avatar.Accessory  />
  }
  
  </Avatar>
    :
    <Avatar
  size="medium"
  rounded
  icon={{name: 'user', type: 'font-awesome'}}
  >
      {  props.Accessory &&
    <Avatar.Accessory  />
  }
  
  </Avatar>
             }

  </View>

  <ListItem.Content style={{marginLeft:'20%'}}>
    <ListItem.Title style={{fontSize:wp('2.5%')}}>{props.Title}</ListItem.Title>
    {/* <ListItem.Title style={{fontSize:wp('2%')}}>{props.Subtitles}</ListItem.Title> */}
    <View style={{ flexDirection: 'row',
    
    }}>
          
    <Icon name='star' color='yellow' size={17}/>
          <Text style={{ paddingTop:2,
    color: 'black',fontSize:10}}>{props.Subtitles}</Text>
        </View>
  </ListItem.Content>
   
</ListItem>

 
       </View>
    )
  
}
export default Avatars;



