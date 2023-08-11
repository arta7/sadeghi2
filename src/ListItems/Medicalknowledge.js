import React, {  useRef, useEffect } from "react";
import {
    StyleSheet, View,
    TouchableOpacity, Alert, ScrollView
    , ActivityIndicator, BackHandler, FlatList, Image, Text
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {MedicalknowledgeList} from './../Control/Data';
import { Icon } from "react-native-elements";
import Sidemenu from './../Main/SideMenu';
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
    Segment, Drawer
} from "native-base";

export default Medicalknowledge = (props) => {
    const drawerRef = useRef();

    useEffect(()=>{
        console.log('MedicalknowledgeList',MedicalknowledgeList)
    },[])

    let closeDrawer = () => {
        drawerRef?.current._root.close()
    }

    let openDrawer = () => {
        drawerRef?.current._root.open()
    }


    return (
        <View style={styles.root}>
               <Drawer
                ref={drawerRef}
                side='right'
                content={<Sidemenu navigation={props.navigation} />}
                onClose={() => closeDrawer()}
                openDrawerOffset={0.4}
                panCloseMask={0.5}
                acceptPan={true}
            >
              <View style={{flexDirection: 'row', backgroundColor: 'rgba(9,132,226,1)', elevation: 6, height: hp('5%'), width: wp('100%')}}>
            <View style={{width: wp('15%'), alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Icon name = 'arrow-back' color='white' type="materialicon" size={30}/>
            </TouchableOpacity>
            </View>
            <View style={{width: wp('70%'), justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{
      fontSize: wp('4.5%'),
      width: '100%',
      color: 'white',
      justifyContent: 'center',
      textAlign: 'right'}}>دانستنی های پزشکی</Text>
            </View>
            <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity  onPress={()=>{openDrawer()}}>
                          <Icon name='menu' color='white' />
                    </TouchableOpacity>
                </View>
            {/* <View style={{width: wp('10%')}}>
            
            </View> */}
        </View>

       
        <FlatList
            data={MedicalknowledgeList}
            renderItem={({item,index}) =>  
                    <TouchableOpacity style={{width:wp(90),height:hp(12),marginHorizontal:wp(5)
                  
                    ,marginVertical:10,flexDirection:'row',marginHorizontal:wp(5),
                    justifyContent:'space-between',borderBottomWidth:0.4,borderBottomColor:'grey'}}
                    onPress={()=>{props.navigation.navigate('StoreProgram',{data:item})}}
                    >
                        <View style={{borderRightWidth:0.4,borderColor:'grey',width:'60%',padding:10,marginVertical:2}}>
                        <Text style={{fontSize:wp(4),color:'black',fontWeight:'bold'}}>{item.Title}</Text>
                        <Text style={{fontSize:wp(2.5),color:'gray'}}>{item.Title}</Text>
                        </View>
                        <View style={{width:'40%',height:'100%',overflow:'hidden'}}>

                       
                        <Image source={item?.photo}
                        resizeMode='stretch'
                        style={{ width:"80%", height :"80%",overflow:'hidden',justifyContent:'center',alignItems:'center',alignSelf:'center' }}
                        />
                         </View>
                      
                    </TouchableOpacity>

            }

            />
</Drawer>
        </View>



    );
}


const styles = StyleSheet.create({
    root: {
        flex: 1
    }

});
