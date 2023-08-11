import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon }  from "react-native-elements";
export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <TouchableOpacity style={this.props.ButtonStyle}
        onPress={this.props.ButtonOperator}
       >
         <View>
 <Text style={this.props.titleStyle}
   onPress={this.props.ButtonOperator}
 >
    {this.props.titleText}
 </Text>
 </View>
       </TouchableOpacity>
    );
  }
}

