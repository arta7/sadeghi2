import React, { useState, useEffect ,useRef} from "react";
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
import DatePicker from 'react-native-date-picker'
var moment = require('moment-jalaali')
import realm from '../Database/Realm';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Notifications from './../Alarm/Notifications';
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


export default DrugsTodo = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [showDateModal, setshowDateModal] = useState(false)
    const [Dozes, setDozes] = useState('')
    const [Name, setName] = useState('')
    const [selectedStartDate, setsetselectedStartDate] = useState(null);
    const [selectedShowDate, setselectedShowDate] = useState(null);
    const [selectedTime, setselectedTime] = useState(new Date(Date.now()));
    const [timePicker, setTimePicker] = useState(false);
    const [DrugsList, setDrugsList] = useState([])
    const [Counter, setCounter] = useState(1)
    const [EditClick, setEditClick] = useState(0)
    const [selectedId,setselectedId] = useState(0)
    const drawerRef = useRef();
    useEffect(() => {
        SelectDrugsList()
    }, [Counter])

    let closeDrawer = () => {
        drawerRef?.current._root.close()
    }

    let openDrawer = () => {
        drawerRef?.current._root.open()
    }


    let CreateDrugs = () => {

        if (Name != '' && Dozes != '') {
            if (EditClick == 0) {

                var Time = new Date(Date.now()).toLocaleDateString('en-US') + ' ' + selectedTime.toLocaleTimeString('en-US')

                setshowDateModal(false)
                var ID = realm.objects('DrugsList').length + 1;
                console.log('ID', ID.toString())
                Notifications.schduleRepeatNotification(new Date(Time), ID.toString(), ' دارو ' + Name, ' دوز دارو' + Dozes);
                realm.write(() => {

                    realm.create('DrugsList', {
                        Id: ID,
                        Name: Name,
                        Date: new Date().toString(),
                        Time: selectedTime.toString(),
                        Doz: Dozes
                    });
                })
            }
            else
            {
                let pr = realm.objects('DrugsList').filtered('Id = $0', selectedId)

                    Notifications.cancelLocalNotification(selectedId);

                    realm.write(() => {
                        realm.delete(pr)
                    })


                    var Time = new Date(Date.now()).toLocaleDateString('en-US') + ' ' + selectedTime.toLocaleTimeString('en-US')

                    setshowDateModal(false)
                    var ID = realm.objects('DrugsList').length + 1;
                    console.log('ID', ID.toString())
                    Notifications.schduleRepeatNotification(new Date(Time), ID.toString(), ' دارو ' + Name, ' دوز دارو ' + Dozes);
                    realm.write(() => {
    
                        realm.create('DrugsList', {
                            Id: ID,
                            Name: Name,
                            Date: new Date().toString(),
                            Time: selectedTime.toString(),
                            Doz: Dozes
                        });
                    })


            }
            setShowModal(false)
            setCounter(Counter + 1)
            setEditClick(0)
            setselectedId(0)
        }
        else {
            Alert.alert('لطفا اطلاعات را درست وارد کنید')
        }
    }

    let SelectDrugsList = () => {
        let pr = realm.objects('DrugsList')
        if (pr.length > 0) {
            setDrugsList(pr)
        }
    }

    let DeleteDrugList = (_id) => {
        Alert.alert('حذف', 'آیا از حذف این گزینه مطمئن هستید؟', [
            {
                text: 'خیر',
                onPress: () => { return true }
            },
            {
                text: 'بله', onPress: () => {
                    let pr = realm.objects('DrugsList').filtered('Id = $0', _id)

                    Notifications.cancelLocalNotification(_id);

                    realm.write(() => {
                        realm.delete(pr)
                    })
                    setCounter(Counter + 1)
                }
            },
        ])
    }


    const onChange = (selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    let onTimeSelected = (event, value) => {

        console.log('event', event)
        setTimePicker(false);
        setselectedTime(new Date(value.toLocaleString()));
        console.log('value time : ', value.toLocaleTimeString('en-US'), 'value real : ', new Date(value.toLocaleString()))

    };

    let onDateChange = (date) => {


        let mydate = new Date(date);
        var dataJalali = moment(mydate).format('jYYYY-jMM-jDD');
        console.log('datae', dataJalali)
        setsetselectedStartDate(dataJalali)

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
                    }}>هشدارهای دارویی</Text>
                </View>
                <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity  onPress={()=>{openDrawer()}}>
                          <Icon name='menu' color='white' />
                    </TouchableOpacity>
                </View>
                {/* <View style={{ width: wp('10%') }}>

                </View> */}
            </View>

            <FlatList
                data={DrugsList}
                renderItem={({ item, index }) =>
                    <View style={{
                        width: wp(90), height: hp(13), marginHorizontal: wp(5),
                        elevation: 2, borderWidth: 1, borderColor: 'transparent'
                        , borderRadius: 5, marginVertical: 10, flexDirection: 'row', backgroundColor: '#c7ddfc', justifyContent: 'space-between'
                    }}>
                        <View style={{ width: '40%', height: '100%', flexDirection: 'row', padding: 5, alignItems: 'center' }}

                        >
                            <TouchableOpacity style={{ paddingHorizontal: 20 }}
                                onPress={() => { DeleteDrugList(item.Id) }}
                            >
                                <Icon name='delete' color='rgba(9,132,226,1)' type="materialicon" size={wp(6)} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 20 }}
                                onPress={() => {
                                    setEditClick(1)
                                    setName(item.Name)
                                    setDozes(item.Doz)
                                    setselectedTime(new Date(item.Time.toLocaleString()));
                                    setselectedId(item.Id)
                                   
                                    setShowModal(true)
                                   
                                }}
                            >
                                <Icon name='edit' color='rgba(9,132,226,1)' type="materialicon" size={wp(6)} />
                            </TouchableOpacity >
                        </View>
                        <View style={{ width: '60%', paddingHorizontal: 15, justifyContent: 'center' }}>
                            <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right' }}>{item.Name}</Text>
                            <Text style={{ fontSize: wp(3), color: 'black', textAlign: 'right' }} numberOfLines={1} >{item.Doz}</Text>
                            <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right' }}>
                                {new Date(item.Time).toLocaleTimeString('en-US').replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</Text>

                        </View>


                    </View>

                }

            />

            <FloatingAction
                onPressMain={() => { setShowModal(true) }}
                position='right'
                color='rgba(9,132,226,1)'
                overlayColor='transparent'
            />




            <CenterModals
                showModal={showModal}
                closeModal={() => {
                    setEditClick(0)
                    setShowModal(false)
                }}
                ViewStyle={{ height: 350, width: '100%' }}
                Children={
                    <View style={{ width: '90%', marginHorizontal: '5%' }}>

                        <TextInputs
                            changeText={(value) => { setName(value) }}
                            values={Name}
                            placeHolder={'نام دارو'}
                            TextStyle={{
                                fontSize: wp('4%'), color: 'blue', width: '100%'
                                , height: '100%'
                            }}
                            style={{
                                width: ('70%'), marginHorizontal: '15%'
                                , height: ('7%')
                                , marginVertical: 25
                            }}
                            IconName='user'
                            IconType='font-awesome'
                            IconColor='white'
                            ErrorTitle={''}
                            showIcon={true}
                            BottomLine={{ backgroundColor: 'rgba(9,132,226,1)' }}
                            IconView={{ backgroundColor: 'rgba(9,132,226,1)' }}
                            ErrorTitleStyle={{ color: 'white' }}
                            placeholderTextColor={'rgba(9,132,226,1)'}
                        />

                        <TextInputs
                            changeText={(value) => { setDozes(value) }}
                            values={Dozes}
                            placeHolder={'دز دارو'}
                            TextStyle={{
                                fontSize: wp('4%'), color: 'blue', width: '100%'
                                , height: '100%'
                            }}
                            style={{
                                width: ('70%'), marginHorizontal: '15%'
                                , height: ('7%')
                                , marginVertical: 25
                            }}
                            IconName='user'
                            IconType='font-awesome'
                            IconColor='white'
                            ErrorTitle={''}
                            BottomLine={{ backgroundColor: 'rgba(9,132,226,1)' }}
                            IconView={{ backgroundColor: 'transparent' }}
                            showIcon={true}
                            ErrorTitleStyle={{ color: 'white' }}
                            placeholderTextColor={'rgba(9,132,226,1)'}
                            MultiLine={true}
                        />

                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center', marginTop: 30 }}>
                            <Text style={{ textAlign: 'right', fontSize: wp(4), fontWeight: 'bold', padding: 15 }}>ساعت :  </Text>

                            <TouchableOpacity style={{
                                width: '60%', height: 50, borderRadius: 5,
                                backgroundColor: 'rgba(9,132,226,1)', justifyContent: 'center', alignItems: 'center'
                            }}
                                onPress={() => {
                                    setTimePicker(true)
                                }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: wp(4) }}>{
                                    selectedTime?.toLocaleTimeString('en-US').replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</Text>
                            </TouchableOpacity>
                        </View>

                        {timePicker &&
                            <DateTimePicker
                                value={selectedTime}
                                mode='time'
                                is24Hour={true}
                                display="default"
                                onChange={onTimeSelected}



                            />
                        }

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                            <TouchableOpacity style={{
                                borderRadius: 5, width: wp(25), height: 40, justifyContent: 'center'
                                , backgroundColor: 'rgba(9,132,226,1)', elevation: 1
                            }}
                                onPress={() => { CreateDrugs() }}
                            >
                                <Text style={{ textAlign: 'center', fontSize: wp(4), color: 'white' }}>ثبت</Text>
                            </TouchableOpacity>

                        </View>




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
