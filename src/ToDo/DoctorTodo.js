import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet, View,
    TouchableOpacity, Alert, ScrollView
    , ActivityIndicator, BackHandler, FlatList, PermissionsAndroid
    , Text
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LifeStyleList, ManagementsolutionsList } from './../Control/Data';
import { Icon } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import CenterModals from "../Components/CenterModals";
import TextInputs from "../Components/Textinputs";
import PersianCalendarPicker from 'react-native-persian-calendar-picker';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import realm from '../Database/Realm';
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


var moment = require('moment-jalaali')



export default DoctorTodo = (props) => {

    const drawerRef = useRef();
    const [showModal, setShowModal] = useState(false)
    const [showDateModal, setshowDateModal] = useState(false)
    const [Address, setAddress] = useState('')
    const [Name, setName] = useState('')
    const [Counter, setCounter] = useState(1)
    const [DoctorLists, setDoctorLists] = useState([])
    const [selectedStartDate, setsetselectedStartDate] = useState(null);
    const [selectedShowDate, setselectedShowDate] = useState(null);
    const [selectedGeStartDate, setselectedGeStartDate] = useState(new Date());
    const [selectedGeShowDate, setselectedGeShowDate] = useState(new Date());
    const [selectedTime, setselectedTime] = useState(new Date(Date.now()));
    const [timePicker, setTimePicker] = useState(false);
    const [EditClick, setEditClick] = useState(0)
    const [selectedId, setselectedId] = useState(0)

    let alarmNotifData = {
        title: 'Alarm',
        message: 'Stand up',
        vibrate: true,
        play_sound: true,
        schedule_type: 'repeat',
        channel: 'wakeup',
        data: { content: 'my notification id is 22' },
        loop_sound: true,
        has_button: true,
        volume: 0.9,
        soundName: 'default'
    };

    let closeDrawer = () => {
        drawerRef?.current._root.close()
    }

    let openDrawer = () => {
        drawerRef?.current._root.open()
    }

    async function requestStoragePermission() {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.SCHEDULE_EXACT_ALARM,
            {
                'title': 'Example App',
                'message': 'Example App access to your location '
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('tets')
        }


    }


  

    useEffect(() => {




        SelectDoctorList()


    }, [])


    let DeleteِDoctorList = (_id) => {
        Alert.alert('حذف', 'آیا از حذف این گزینه مطمئن هستید؟', [
            {
                text: 'خیر',
                onPress: () => { return true }
            },
            {
                text: 'بله', onPress: () => {
                    Notifications.cancelLocalNotification(_id);
                    let pr = realm.objects('DoctorsList').filtered('Id = $0', _id)
                    realm.write(() => {
                        realm.delete(pr)
                    })
                    SelectDoctorList()
                }
            },
        ])
    }


    let CreateDoctor = async () => {
        if (Name != '' && Address != '' && selectedShowDate != null) {

            if(new Date(Date.now()) < new Date(selectedGeShowDate))
            {
            if (EditClick == 0) {
                var ID ;
                console.log('selectedShowDate save  : ',selectedShowDate)
                //if(realm.objects('DoctorsListControl').length ==  0)
                
                    ID = 100000 + realm.objects('DoctorsListControl').length + 1;
                
                // else
                // {
                //     var pr = realm.objects('DoctorsList');
                //         ID = pr[pr.length-1].Id +1
                // }
                // var ID = 100000 + realm.objects('DoctorsList').length + 1;
                console.log('ID', ID.toString())
                Notifications.schduleNotification(new Date(selectedGeShowDate), ID.toString(), ' قرار ملاقات با  ' + Name, '  آدرس مطب ' + Address);

                realm.write(() => {

                    realm.create('DoctorsListControl', {
                        Id: ID
                    });
                })
                realm.write(() => {

                    realm.create('DoctorsList', {
                        Id: ID,
                        DoctorName: Name,
                        Place: Address,
                        Date: selectedGeShowDate.toString(),
                        Time: selectedTime?.toString()
                    });
                })
            }
            else {
                console.log('selectedShowDate edit mode : ',selectedShowDate)
                Notifications.cancelLocalNotification(selectedId);
                let pr = realm.objects('DoctorsList').filtered('Id = $0', selectedId)
                var ID =  selectedId;
                console.log('ID', ID.toString())
                // realm.write(() => {
                //     realm.delete(pr)
                // })

                // var ID = 100000 + realm.objects('DoctorsList').length + 1;
                // console.log('ID', ID.toString())
                Notifications.schduleNotification(new Date(selectedGeShowDate), ID.toString(), ' قرار ملاقات با دکتر ' + Name, '  آدرس مطب ' + Address);

                realm.write(() => {

                    // realm.create('DoctorsList', {
                        
                    pr[0].DoctorName= Name,
                    pr[0].Place= Address,
                    pr[0].Date= selectedGeShowDate.toString(),
                    pr[0].Time= selectedTime?.toString()
                    // });
                })


            }
            setShowModal(false)
            // setCounter(Counter + 1)
            setEditClick(0)
            setselectedId(0)
            setName('')
            setAddress('')
            setselectedShowDate(null)
            SelectDoctorList()
        }
        else
        {
            Alert.alert('اخطار','ساعت انتخاب شده گذشته است لطفا دقت نمایید و ساعت درست را انتخاب کنید.')
        }

        }
        else {
            Alert.alert('لطفا اطلاعات را درست وارد کنید')
        }
    }
    function fieldSorter(fields) {
        console.log('fields',fields)
        return function (a, b) {
            return fields
                .map(function (o) {
                    console.log('a [',[o],a[o])
                    console.log('b [',[o],b[o])
                    var dir = 1;
                    if (o[0] === '-') {
                       dir = -1;
                       o=o.substring(1);
                    }
                    if (a[o] >= b[o]) return -(dir);
                    if (a[o] < b[o]) return (dir);
                    return 0;
                })
                .reduce(function firstNonZeroValue (p,n) {
                    return p ? p : n;
                }, 0);
        };
    }

    let SelectDoctorList = () => {
        let pr = realm.objects('DoctorsList')
        //.sorted("Date",false)
        
        let x = Array.from(pr)

        console.log('X',x)
        
        if (pr.length > 0) {

            let sortdata = x.sort((a, b) => new Date(a.Date) - new Date(b.Date))

            console.log('x',sortdata)
            setDoctorLists(sortdata)
        }
        else
        {
            setDoctorLists(pr)
        }
    }

    let onTimeSelected = (event, value) => {

        console.log('event', event)
        setTimePicker(false);
        setselectedTime(new Date(value.toLocaleString()));
        console.log('value time : ', value.toLocaleTimeString('en-US'), 'value real : ', new Date(value.toLocaleString()))

    };



    let onDateChange = (date) => {


        let mydate = new Date(date);
        setselectedGeStartDate(mydate);
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

                    <View style={{ width: wp('70%'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                        <Text style={{
                            fontSize: wp('3.5%'),
                            width: '100%',
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'right'
                        }}>لیست ویزیت ها</Text>
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
                    data={DoctorLists}
                    renderItem={({ item, index }) =>
                        <View style={{
                            width: wp(90), height: hp(20), marginHorizontal: wp(5),
                            elevation: 2, borderWidth: 1, borderColor: 'transparent'
                            , borderRadius: 5, marginVertical: 10, flexDirection: 'row', backgroundColor: '#c7ddfc', justifyContent: 'space-between'
                        }}>
                            <View style={{ width: '40%', height: '100%', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                                <TouchableOpacity style={{ paddingHorizontal: 20 }}
                                    onPress={() => { DeleteِDoctorList(item.Id) }}
                                >
                                    <Icon name='delete' color='rgba(9,132,226,1)' type="materialicon" size={wp(6)} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingHorizontal: 20 }}
                                    onPress={() => {
                                        setEditClick(1)
                                        setselectedId(item.Id)
                                        setName(item.DoctorName)
                                        setAddress(item.Place)

                                        let mydate = new Date(item.Date);
                                        setselectedGeStartDate(mydate);
                                        var dataJalali = moment(mydate).format('jYYYY-jMM-jDD');
                                        setsetselectedStartDate(dataJalali)

                                        //test 
                                        var x = new Date(item.Date).toLocaleDateString('en-US') + ' ' + new Date(item.Time).toLocaleTimeString('en-US')
                                        // var x = mydate.toLocaleDateString('en-US') + ' ' + item.Time
                                        setselectedGeShowDate(new Date(x))

                                        setselectedShowDate(dataJalali)
                                        setselectedTime(new Date(item.Time))

                                        setShowModal(true)

                                    }}
                                >
                                    <Icon name='edit' color='rgba(9,132,226,1)' type="materialicon" size={wp(6)} />
                                </TouchableOpacity >
                            </View>
                            <View style={{ width: '60%', paddingHorizontal: 15, justifyContent: 'center' }}>
                                <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right' }} numberOfLines={1}>{item.DoctorName}</Text>
                                <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right' }} numberOfLines={1}>{item.Place}</Text>
                                <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right' }}>{moment(new Date(item.Date)).format('jYYYY-jMM-jDD')}</Text>
                                <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right' }}>
                                    {new Date(item.Time).toLocaleTimeString('en-US').replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</Text>

                            </View>


                        </View>

                    }

                />

                <FloatingAction
                    onPressMain={() => { 
                        setEditClick(0)
            setselectedId(0)
            setName('')
            setAddress('')
            setselectedShowDate(null)
                        setShowModal(true) }}
                    position='right'
                    color='rgba(9,132,226,1)'
                    overlayColor='transparent'
                />




                <CenterModals
                    showModal={showModal}
                    closeModal={() => { setShowModal(false) }}
                    Children={
                        <View style={{ width: '90%', marginHorizontal: '5%' }}>
                            <View style={{
                                justifyContent: 'center', alignItems: 'center', width: ('80%'),
                                marginHorizontal: wp(10), borderRadius: 10, borderWidth: 0.5, elevation: 2, marginTop: 10, backgroundColor: '#deeafc', marginBottom: 10

                            }}>
                                <Text style={{
                                    textAlign: "center",
                                    color: "red",
                                    fontSize: wp(3), padding: 10
                                }}>لطفا ساعت گوشی خود را برای اعلان هشدار دقیق از قبل تنظیم کنید</Text>
                            </View>
                            <TextInputs
                                changeText={(value) => { setName(value) }}
                                values={Name}
                                placeHolder={'نام دکتر'}
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
                                changeText={(value) => { setAddress(value) }}
                                values={Address}
                                placeHolder={'آدرس'}
                                TextStyle={{
                                    fontSize: wp('4%'), color: 'blue', width: '100%'
                                    , height: hp('15')
                                }}
                                style={{
                                    width: ('70%'), marginHorizontal: '15%'
                                    , height: hp('15%')
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
                            <View style={{
                                width: ('70%'), marginHorizontal: '15%'
                                , height: hp('15%')
                                , marginVertical: 25, alignItems: 'center'
                            }}>
                                <TouchableOpacity style={{
                                    width: '90%', height: 50, borderRadius: 5,
                                    backgroundColor: 'rgba(9,132,226,1)', justifyContent: 'center', alignItems: 'center'
                                }}
                                    onPress={() => {
                                        console.log('selectedGeStartDate : ', selectedGeStartDate.toLocaleDateString('en-US'))
                                        let mydate = new Date(selectedGeStartDate);
                                        setselectedGeStartDate(mydate);
                                        var dataJalali = moment(mydate).format('jYYYY-jMM-jDD');
                                        console.log('datae', dataJalali)
                                        setsetselectedStartDate(dataJalali)
                                        setshowDateModal(true)

                                    }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: wp(4) }}>{selectedShowDate != null ? selectedShowDate : 'تاریخ'}</Text>
                                </TouchableOpacity>


                                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 3 }}>
                                    <TouchableOpacity style={{
                                        borderRadius: 5, width: wp(25), height: 40, justifyContent: 'center'
                                        , backgroundColor: 'rgba(9,132,226,1)', elevation: 1
                                    }}
                                        onPress={() => { CreateDoctor() }}
                                    >
                                        <Text style={{ textAlign: 'center', fontSize: wp(4), color: 'white' }}>ثبت</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>





                            <CenterModals
                                showModal={showDateModal}
                                closeModal={() => {
                                    setEditClick(0)
                                    setshowDateModal(false)
                                }}
                                ViewStyle={{ height: 500, width: '100%' }}
                                Children={
                                    <View style={{ width: '100%' }}>
                                        <ScrollView>
                                            <View style={{ marginHorizontal: wp(2), flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <TouchableOpacity style={{ backgroundColor: 'rgba(9,132,226,1)', borderRadius: 5, width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}
                                                    onPress={() => {
                                                        var x = selectedGeStartDate.toLocaleDateString('en-US') + ' ' + selectedTime.toLocaleTimeString('en-US')
                                                        console.log('x Date : ', new Date(x))
                                                        setselectedShowDate(selectedStartDate)
                                                        setselectedGeShowDate(new Date(x))
                                                        setshowDateModal(false)
                                                    }}
                                                >
                                                    <Text style={{ fontSize: wp(4), textAlign: 'center', color: 'white' }}>تایید</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ backgroundColor: '#c7ddfc', borderRadius: 5, width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}
                                                    onPress={() => { setshowDateModal(false) }}
                                                >
                                                    <Text style={{ fontSize: wp(4), textAlign: 'center', color: 'black' }}>لغو</Text>
                                                </TouchableOpacity>

                                            </View>


                                            <Text style={{ textAlign: 'right', fontSize: wp(4), fontWeight: 'bold', padding: 15 }}>تاریخ :  </Text>
                                            <PersianCalendarPicker
                                                onDateChange={onDateChange}
                                                scaleFactor={wp(110)}
                                                minDate={new Date()}

                                                initialDate={moment.utc(selectedGeShowDate)}

                                            //  customDatesStyles={{date: selectedGeShowDate, containerStyle: {backgroundColor:'#5ce600'}, style: {backgroundColor:'#5ce600'}, textStyle: {color:'black'}}}


                                            />
                                            <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                                <Text style={{ textAlign: 'right', fontSize: wp(4), fontWeight: 'bold', padding: 15 }}>ساعت :  </Text>

                                                <TouchableOpacity style={{
                                                    width: '60%', height: 50, borderRadius: 5,
                                                    backgroundColor: 'rgba(9,132,226,1)', justifyContent: 'center', alignItems: 'center'
                                                }}
                                                    onPress={() => {
                                                        setTimePicker(true)
                                                    }}>
                                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: wp(4) }}>{selectedTime?.toLocaleTimeString('en-US').replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</Text>
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

                                        </ScrollView>

                                    </View>
                                }
                            />


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
