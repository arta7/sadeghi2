import React, { useState, useEffect,useRef } from "react";
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

const data = [{ id: '1',Video: require('./../VideosFile/1.mp4'),images:require('./../Images/Foot.png')},
{ id: '2',Video: require('./../VideosFile/2.mp4') ,images:require('./../Images/Heart.jpg')}, 
{ id: '3',Video: require('./../VideosFile/3.mp4'),images:require('./../Images/DiabetstAllTypes.png')},
{ id: '4',Video: require('./../VideosFile/4.mp4'),images:require('./../Images/Eye.png')},
{ id: '5',Video: require('./../VideosFile/5.mp4'),images:require('./../Images/Kidney.png')},
{ id: '6',Video: require('./../VideosFile/6.mp4'),images:require('./../Images/noron.jpg')}

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

    
    const item = props.navigation.getParam('item', null)


  







    return (
      
                    <VideoFile VideoFile={item.Video} images={item.images}   Title={item.Title}  navigation={props.navigation}  />

    );
}


const styles = StyleSheet.create({
    root: {
        flex: 1
    }

});
