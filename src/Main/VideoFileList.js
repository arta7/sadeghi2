import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet, View,
    TouchableOpacity, Alert, ScrollView
    , ActivityIndicator, BackHandler, FlatList, Image, Text
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LifeStyleList, ManagementsolutionsList } from './../Control/Data';
import { Icon } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import CenterModals from "../Components/CenterModals";
import TextInputs from "../Components/Textinputs";
import PersianCalendarPicker from 'react-native-persian-calendar-picker';
import DatePicker from 'react-native-date-picker';
import VideoPlayer from 'react-native-video-player';
// import DateTimePicker from '@react-native-community/datetimepicker';
import realm from '../Database/Realm';
import VideoFile from "./VideoFile";
import Sidemenu from './SideMenu';
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

const data = [{ id: '1', Video: require('./../VideosFile/1.mp4'), images: require('./../Images/Foot.png'), Title: 'test1' },
{ id: '2', Video: require('./../VideosFile/2.mp4'), images: require('./../Images/Heart.jpg'), Title: 'test1' },
{ id: '3', Video: require('./../VideosFile/3.mp4'), images: require('./../Images/DiabetstAllTypes.png'), Title: 'test1' },
{ id: '4', Video: require('./../VideosFile/4.mp4'), images: require('./../Images/Eye.png'), Title: 'test1' },
{ id: '5', Video: require('./../VideosFile/5.mp4'), images: require('./../Images/Kidney.png'), Title: 'test1' },
{ id: '6', Video: require('./../VideosFile/6.mp4'), images: require('./../Images/noron.jpg'), Title: 'test1' }

]



export default VideoFileList = (props) => {
    const drawerRef = useRef();
    const [showModal, setShowModal] = useState(false)
    const [showDateModal, setshowDateModal] = useState(false)
    const [Address, setAddress] = useState('')
    const [Name, setName] = useState('')
    const [Counter, setCounter] = useState(1)
    const [DoctorLists, setDoctorLists] = useState([])
    const [selectedStartDate, setsetselectedStartDate] = useState(null);
    const [selectedShowDate, setselectedShowDate] = useState(null);
    const [selectedTime, setselectedTime] = useState(new Date());
    const elRefs = useRef([6]);
    const items = useRef(Array(data.length).fill(React.createRef()));
    let closeDrawer = () => {
        drawerRef?.current._root.close()
    }

    let openDrawer = () => {
        drawerRef?.current._root.open()
    }

    useEffect(() => {

    }, [])













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
                <View style={{ flexDirection: 'row', backgroundColor: 'rgba(9,132,226,1)', elevation: 6, height: hp('5%'), width: wp('100%') }}>
                    <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                            <Icon name='arrow-back' color='white' type="materialicon" size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: wp('70%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: wp('3.5%'),
                            width: '100%',
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'right'
                        }}>لیست  ویدیوها</Text>
                    </View>

                    <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { openDrawer() }}>
                            <Icon name='menu' color='white' />
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ width: wp('10%') }}>

                </View> */}
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item, index }) =>
                        <View style={{ width: wp('100%'), height: hp(42), marginVertical: 20 }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right', paddingHorizontal: 10 }}>{item.Title}</Text>
                            </View>
                            <TouchableOpacity style={{ width: wp('100%'), height: hp(40) }}
                            disabled={true}
                           // onPress={()=>{props.navigation.push('ShowVideo', { item: item })}}
                            >
                                <Image
                                    source={item.images}
                                    style={{ width: wp('95%'),marginHorizontal:wp(2.5), height: hp(40),borderWidth:1
                                    ,borderRadius:10,elevation:2,borderColor:'gray' }}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                                <TouchableOpacity style={{position:'absolute',bottom:'40%',right:'40%',elevation:5,
                                justifyContent:'center',alignItems:'center',borderRadius:50,width:100,height:100}}
                                onPress={()=>{props.navigation.push('ShowVideo', { item: item })}}
                                >  
                                <Icon name='caretright' size={30} color='gray' type='antdesign' />
                                </TouchableOpacity>
                          
                        

                        </View>

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
