import React, { Component } from "react";
import { StyleSheet, View, Image, Linking, Alert, TouchableOpacity, Text } from "react-native";
// import { Actions } from "react-native-router-flux";
import { Icon, Header } from 'react-native-elements';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Title,
  Segment
} from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import { widthPercentageToDP } from "react-native-responsive-screen";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // getUserId = () => {
  //   AsyncStorage.getItem("userId").then(value => {
  //     this.setState({ userId: value });
  //   });
  // };



  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch (exception) {
      return false;
    }
  }


  render() {
    return (
      <Container style={{ backgroundColor: "rgba(9,132,226,1)" }}>
        <Image
          source={require("./../Images/MainMenu.png")}
          style={{ width: '100%', height: 200 }}
          resizeMode='stretch'
        />

        <List style={{
          borderBottomWidth: 0,
          borderTopWidth: 0, marginTop: 20
        }}>
          <ListItem style={styles.ListItem}>

            <TouchableOpacity onPress={() =>
              this.props.navigation.replace('Main')
            }
              style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, borderBottomColor: 'white', borderBottomWidth: 0.5, height: 40 }}>
              {/* <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}> */}

              <Icon name="home" size={24} type='antdesign' color='rgba(224,240,253,1)' />
              <Text style={styles.text}>
                خانه
              </Text>

            </TouchableOpacity>
          </ListItem>

          <ListItem style={styles.ListItem}>

            <TouchableOpacity onPress={() => {
             
              this.props.navigation.navigate('ChangePassword')
            }

            }
              style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, borderBottomColor: 'white', borderBottomWidth: 0.5, height: 40 }}>
              {/* <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}> */}

              <Icon name="md-exit" size={24} type='ionicon' color='rgba(224,240,253,1)' />
              <Text style={styles.text}>
                تغییر رمز عبور
              </Text>

            </TouchableOpacity>
          </ListItem>

          <ListItem style={styles.ListItem}>

            <TouchableOpacity onPress={() => {
              this.removeItemValue('UserData')
              this.props.navigation.replace('Login')
            }

            }
              style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, borderBottomColor: 'white', borderBottomWidth: 0.5, height: 40 }}>
              {/* <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}> */}

              <Icon name="md-exit" size={24} type='ionicon' color='rgba(224,240,253,1)' />
              <Text style={styles.text}>
                خروج
              </Text>

            </TouchableOpacity>
          </ListItem>
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: "right",
    color: "rgba(224,240,253,1)",
    fontSize: widthPercentageToDP(4), fontFamily: 'Anjoman-Medium'
  },
  ListItem: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    flexDirection: 'row'
    , justifyContent: 'space-between'
  }
});