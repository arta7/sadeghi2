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
import { Picker as SelectPicker } from '@react-native-picker/picker';
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



export default BloodTest = (props) => {

    const drawerRef = useRef();
    const [showModal, setShowModal] = useState(false)
    const [showDateModal, setshowDateModal] = useState(false)
    const [Time, setTime] = useState('ناشتا')
    const [TimeIndex, setTimeIndex] = useState(0)
    const [Amount, setAmount] = useState('')
    const [Counter, setCounter] = useState(1)
    const [BloodTestList, setBloodTestList] = useState([])
    const [selectedStartDate, setsetselectedStartDate] = useState(null);
    const [selectedShowDate, setselectedShowDate] = useState(null);
    const [selectedGeStartDate, setselectedGeStartDate] = useState(new Date());
    const [selectedGeShowDate, setselectedGeShowDate] = useState(new Date());
    const [selectedTime, setselectedTime] = useState(new Date(Date.now()));
    const [timePicker, setTimePicker] = useState(false);
    const [EditClick, setEditClick] = useState(0)
    const [selectedId, setselectedId] = useState(0)

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    let closeDrawer = () => {
        drawerRef?.current._root.close()
    }

    let openDrawer = () => {
        drawerRef?.current._root.open()
    }

    // async function requestStoragePermission() {
    //     const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.SCHEDULE_EXACT_ALARM,
    //         {
    //             'title': 'Example App',
    //             'message': 'Example App access to your location '
    //         }
    //     )
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         console.log('tets')
    //     }


    // }

    useEffect(() => {

         SelectBloodTestList()
       
    }, [])


    let DeleteِBloodTestList = (_id) => {
        Alert.alert('حذف', 'آیا از حذف این گزینه مطمئن هستید؟', [
            {
                text: 'خیر',
                onPress: () => { return true }
            },
            {
                text: 'بله', onPress: () => {
                    let pr = realm.objects('BloodTestList').filtered('Id = $0', _id)
                    console.log('pr', pr)

                    realm.write(() => {
                        realm.delete(pr)
                    })

                    SelectBloodTestList()
                  

                }
            },
        ])
    }


    let CreateBloodTest = async () => {
        if (Amount != '' && Time != '' && selectedShowDate != null) {
            

            if (EditClick == 0) {
                console.log('selectedShowDate save',selectedGeShowDate)
                var ID = 300000 + realm.objects('BloodTestListControl').length + 1;
                console.log('ID', ID.toString())

                realm.write(() => {

                    realm.create('BloodTestListControl', {
                        Id: ID
                    });
                })

                realm.write(() => {

                    realm.create('BloodTestList', {
                        Id: ID,
                        Amount: Amount,
                        Time: Time,
                        Date: selectedGeShowDate.toString(),
                        ItemIndex: TimeIndex.toString()
                    });
                })
            }
            else {
                console.log('selectedShowDate edit mode',selectedGeShowDate)
                let pr = realm.objects('BloodTestList').filtered('Id = $0', selectedId)
                realm.write(() => {
                    realm.delete(pr)
                })

                var ID = 300000 + realm.objects('BloodTestListControl').length + 1;
                console.log('ID', ID.toString())

                realm.write(() => {

                    realm.create('BloodTestListControl', {
                        Id: ID
                    });
                })

                realm.write(() => {

                    realm.create('BloodTestList', {
                        Id: ID,
                        Amount: Amount,
                        Time: Time,
                        Date: selectedGeShowDate.toString(),
                        ItemIndex: TimeIndex.toString()
                    });
                })


            }
            setShowModal(false)
            setCounter(Counter + 1)
            setEditClick(0)
            setselectedId(0)
            setAmount('')
            setTime('ناشتا')
            setTimeIndex(0)
            setselectedShowDate(null)
            SelectBloodTestList()

        }
        else {
            Alert.alert('لطفا اطلاعات را درست وارد کنید')
        }
    }

    function fieldSorter(fields) {
        return function (a, b) {
            return fields
                .map(function (o) {
                    console.log('a [',[o],a[o])
                    console.log('b [',[o],b[o])
                    var dir = 1;
                    if (o[0] === '-') {
                        dir = -1;
                        o = o.substring(1);
                    }
                    if (a[o] > b[o]) return dir;
                    if (a[o] <= b[o]) return -(dir);
                    return 0;
                })
                .reduce(function firstNonZeroValue(p, n) {
                    return p ? p : n;
                }, 0);
        };
    }


    


    let SelectBloodTestList = () => {
        let pr = realm.objects('BloodTestList')

        console.log('pr after change : ', pr)


        if (pr.length > 0) {
            let x = Array.from(pr)
            
            let sortdata = x.sort((a, b) => {
                if((a.ItemIndex) - (b.ItemIndex)>0)
                {
                    return 1;
              
                   
                }
                else  if((a.ItemIndex) - (b.ItemIndex)<0)
                {
                    return -1;
                
                }
                else
                {
                    console.log('ItemIndex = > ',a , b )
                    return 0;
                  
                }
               
             })

             sortdata  = sortdata.sort((a, b) => {
                    if(new Date(a.Date).setHours(0,0,0,0) - new Date(b.Date).setHours(0,0,0,0)>0)
                    {

                        return 1;
                  
                       
                    }
                    else   if(new Date(a.Date).setHours(0,0,0,0) - new Date(b.Date).setHours(0,0,0,0)<0)
                    {
                        return -1;
                    
                    }
                    else
                    {
                        console.log('ItemIndex = > ',a , b )
                        return 0;
                      
                    }
                   
                 })
            console.log('x', sortdata)

            setBloodTestList(sortdata)

        }
        else
        {
            setBloodTestList(pr)
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
                        }}>لیست  قند خون</Text>
                    </View>

                    <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { openDrawer() }}>
                            <Icon name='menu' color='white' />
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ width: wp('10%') }}>

                </View> */}
                </View>


                <View style={{
                    width: wp(90), height: 50, marginHorizontal: wp(5),
                    elevation: 2, borderWidth: 1, borderColor: 'transparent'
                    , borderRadius: 5, marginTop: 30, flexDirection: 'row-reverse', backgroundColor: '#c7ddfc', justifyContent: 'space-between'
                }}>

                    <View style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1 }}>
                        <Text style={{ color: 'black', fontSize: wp(2.5), fontWeight: 'bold' }}>تاریخ تست</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1 }}>
                        <Text style={{ color: 'black', fontSize: wp(2.5), fontWeight: 'bold' }}>زمان تست</Text>

                    </View>
                    {/* <View style={{ width: '5%', height: '100%', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1 }}>
                        <Text style={{ color: 'black', fontSize: wp(2.5), fontWeight: 'bold' }}>Ind</Text>
                    </View> */}
                    <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1 }}>
                        <Text style={{ color: 'black', fontSize: wp(2.5), fontWeight: 'bold' }}>میزان قند خون</Text>
                    </View>

                    <View style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    </View>
                </View>

                <FlatList
                    data={BloodTestList}
                    renderItem={({ item, index }) =>

                        // <View style={{
                        //     width: wp(90), height: hp(15), marginHorizontal: wp(5),
                        //     elevation: 2, borderWidth: 1, borderColor: 'transparent'
                        //     , borderRadius: 5, marginVertical: 10, flexDirection: 'row', backgroundColor: '#c7ddfc', justifyContent: 'space-between'
                        // }}>
                        //     <View style={{ width: '40%', height: '100%', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                        //         <TouchableOpacity style={{ paddingHorizontal: 20 }}
                        //             onPress={() => { DeleteِBloodTestList(item.Id) }}
                        //         >
                        //             <Icon name='delete' color='rgba(9,132,226,1)' type="materialicon" size={wp(6)} />
                        //         </TouchableOpacity>
                        //         <TouchableOpacity style={{ paddingHorizontal: 20 }}
                        //             onPress={() => {
                        //                 setEditClick(1)
                        //                 setselectedId(item.Id)
                        //                 setAmount(item.Amount)
                        //                 setTime(item.Time)
                        //                 let mydate = new Date(item.Date);
                        //                 setselectedGeStartDate(mydate);
                        //                 var dataJalali = moment(mydate).format('jYYYY-jMM-jDD');
                        //                 setsetselectedStartDate(dataJalali)
                        //                 setselectedShowDate(dataJalali)

                        //                 setShowModal(true)

                        //             }}
                        //         >
                        //             <Icon name='edit' color='rgba(9,132,226,1)' type="materialicon" size={wp(6)} />
                        //         </TouchableOpacity >
                        //     </View>
                        //     <View style={{ width: '60%', paddingHorizontal: 15, justifyContent: 'center' }}>
                        //         <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right' }} numberOfLines={1}>{item.Amount}</Text>
                        //         <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right' }} numberOfLines={1}>{item.Time}</Text>
                        //         <Text style={{ fontSize: wp(3.5), color: 'black', textAlign: 'right' }}>{moment(new Date(item.Date)).format('jYYYY-jMM-jDD')}</Text>


                        //     </View>


                        // </View>

                        <View style={{
                            width: wp(90), height: 50, marginHorizontal: wp(5),
                            borderWidth: 1, borderColor: 'transparent'
                            , flexDirection: 'row-reverse', backgroundColor: '#c7ddfc', justifyContent: 'space-between', borderBottomColor: 'gray'
                        }}>

                            <View style={{ width: '25%', height: '100%', justifyContent: 'center', borderLeftWidth: 1, alignItems: 'center' }}>

                                <Text style={{ fontSize: wp(2.5), color: 'black', textAlign: 'right' }}>{moment(new Date(item.Date)).format('jYYYY-jMM-jDD')}</Text>
                            </View>
                            <View style={{ width: '30%', height: '100%', justifyContent: 'center', borderLeftWidth: 1, alignItems: 'center' }}>
                                <Text style={{ fontSize: wp(3), color: 'black', textAlign: 'right' }} numberOfLines={1}>{item.Time}</Text>
                            </View>

                            {/* <View style={{ width: '5%', height: '100%', justifyContent: 'center', borderLeftWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: wp(2.5), color: 'black', textAlign: 'right' }} numberOfLines={1}>{item.ItemIndex}</Text>
                            </View> */}

                            <View style={{ width: '20%', height: '100%', justifyContent: 'center', borderLeftWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: wp(2.5), color: 'black', textAlign: 'right' }} numberOfLines={1}>{item.Amount}</Text>
                            </View>
                            <View style={{ width: '25%', height: '100%', flexDirection: 'row', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ paddingHorizontal: 20 }}
                                    onPress={() => {
                                        console.log('item id', item.Id)
                                        try
                                        {
                                            DeleteِBloodTestList(item.Id)
                                        }

                                        catch
                                        {

                                        }
                                      
                                    }}
                                >
                                    <Icon name='delete' color='rgba(9,132,226,1)' type="materialicon" size={wp(6)} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingHorizontal: 20 }}
                                    onPress={() => {
                                        setEditClick(1)
                                        
                                        // var x = selectedGeStartDate.toLocaleDateString('en-US') + ' ' + selectedTime.toLocaleTimeString('en-US')
                                        // console.log('x Date : ', new Date(x))
                                        // setselectedShowDate(selectedStartDate)
                                        // setselectedGeShowDate(new Date(x))

                                        let mydate = new Date(item.Date);
                                       
                                        setselectedGeStartDate(mydate);
                                        var dataJalali = moment(mydate).format('jYYYY-jMM-jDD');
                                        setsetselectedStartDate(dataJalali)
                                        setselectedShowDate(dataJalali)
                                        setselectedGeShowDate(new Date(mydate))

                                        setselectedId(item.Id)
                                        setAmount(item.Amount)
                                        setTime(item.Time)
                                        setTimeIndex(item.ItemIndex)
                                      

                                        setShowModal(true)

                                    }}
                                >
                                    <Icon name='edit' color='rgba(9,132,226,1)' type="materialicon" size={wp(5)} />
                                </TouchableOpacity >
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
                    closeModal={() => { setShowModal(false) }}
                    ViewStyle={{ height: 400, width: '100%' }}
                    Children={
                        <View style={{ width: '90%', marginHorizontal: '5%' }}>



                            <View style={{
                                width: ('70%'), marginHorizontal: '15%'
                                , height: 70
                                , marginVertical: 10, alignItems: 'center'
                            }}>
                                <TouchableOpacity style={{
                                    width: '90%', height: 50, borderRadius: 5,
                                    backgroundColor: 'rgba(9,132,226,1)', justifyContent: 'center', alignItems: 'center'
                                }}
                                    onPress={() => {

                                     
                                        let mydate = new Date(selectedGeStartDate);
                                        

                                        setselectedGeStartDate(mydate);
                                        var dataJalali = moment(mydate).format('jYYYY-jMM-jDD');
                                        setsetselectedStartDate(dataJalali)
                                        setshowDateModal(true)

                                    }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: wp(4) }}>{selectedShowDate != null ? selectedShowDate : 'تاریخ'}</Text>
                                </TouchableOpacity>



                            </View>
                            <View style={{ flexDirection: 'row-reverse', justifyContent: "center", alignItems: 'center', width: '100%', }}>
                                <View style={{ width: '20%', justifyContent: "center", alignItems: 'center' }}>
                                    <Text style={{ fontSize: wp('3.5%'), color: 'black', marginTop: 5 }}>زمان  : </Text>
                                </View>


                                <View style={{
                                    width: ('60%')
                                    , height: hp('7%')
                                    , borderWidth: 1, borderRadius: 10, justifyContent: "center", alignItems: 'center', borderColor: "rgba(9,132,226,1)"

                                }}>

                                    <View style={{ width: '100%' }}>
                                        <SelectPicker
                                            ref={pickerRef}
                                            mode="dropdown"
                                            selectionColor='rgba(9,132,226,1)'
                                            selectedValue={Time}

                                            onValueChange={(itemValue, itemIndex) => {
                                                setTime(itemValue)
                                                console.log('itemIndex', itemIndex)
                                                setTimeIndex(itemIndex)
                                            }
                                            }>
                                            <SelectPicker.Item label="ناشتا" value="ناشتا" />
                                            <SelectPicker.Item label="دو ساعت بعد از صبحانه" value="دو ساعت بعد از صبحانه" />
                                            <SelectPicker.Item label="قبل از ناهار" value="قبل از ناهار" />
                                            <SelectPicker.Item label="دو ساعت بعد از نهار" value="دو ساعت بعد از نهار" />
                                            <SelectPicker.Item label="قبل از شام" value="قبل از شام" />
                                            <SelectPicker.Item label="دو ساعت بعد از شام" value="دو ساعت بعد از شام" />
                                            <SelectPicker.Item label="زمان خواب" value="زمان خواب" />
                                        </SelectPicker>
                                    </View>
                                </View>
                            </View>


                            <TextInputs
                                changeText={(value) => { setAmount(value) }}
                                values={Amount}
                                placeHolder={'میزان قند خون'}
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
                                keyboardtype={"numeric"}
                            />





                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                                <TouchableOpacity style={{
                                    borderRadius: 5, width: wp(25), height: 50, justifyContent: 'center'
                                    , backgroundColor: 'rgba(9,132,226,1)', elevation: 1
                                }}
                                    onPress={() => { CreateBloodTest() }}
                                >
                                    <Text style={{ textAlign: 'center', fontSize: wp(4), color: 'white' }}>ثبت</Text>
                                </TouchableOpacity>

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
                                                maxDate={new Date()}
                                               


                                                initialDate={moment.utc(selectedGeShowDate)}

                                            //  customDatesStyles={{date: selectedGeShowDate, containerStyle: {backgroundColor:'#5ce600'}, style: {backgroundColor:'#5ce600'}, textStyle: {color:'black'}}}


                                            />

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
