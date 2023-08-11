import React, { useRef, useState, useEffect } from "react";
import {
    StyleSheet, View,
    TouchableOpacity, Alert, ScrollView
    , ActivityIndicator, BackHandler, FlatList, Image, Text
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from "react-native-elements";
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



const data = [{ id: '1', Name: 'دارو', Photo: require('./../Images/medicine.png'), Page: 'DrugsTodo' },
{ id: '2', Name: 'پزشک', Photo: require('./../Images/medical-checkup.png'), Page: 'DoctorTodo' },
{ id: '3', Name: 'محاسبه BMI', Photo: require('./../Images/body-mass.png'), Page: 'BMI' }]




export default ReminderSelector = (props) => {
    const drawerRef = useRef();
    const [showLoaderSpecialProgram, setshowLoaderSpecialProgram] = useState(false)
    const [showLoaderStoreFeature, setshowLoaderStoreFeature] = useState(false)
    const [showLoaderAllPrograms, setshowLoaderAllPrograms] = useState(false)
    const [showLoaderAllTags, setshowLoaderAllTags] = useState(false)
    const [showItems, setShowItems] = useState(true)


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
                        }}></Text>
                    </View>

                    <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity  onPress={()=>{openDrawer()}}>
                          <Icon name='menu' color='white' />
                    </TouchableOpacity>
                </View>
                    {/* <View style={{ width: wp('10%') }}>

                    </View> */}
                </View>
                <View style={{ width: wp('90%'), height: hp(25), marginHorizontal: wp(5), overflow: 'hidden', borderRadius: 10, elevation: 1, marginTop: 20 }}>
                    <Image source={require('./../Images/MainMenu.png')}
                        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                        resizeMode='stretch' />


                </View>

                <FlatList
                    contentContainerStyle={{
                        flexDirection: 'row', marginTop: 20, flexWrap: 'wrap'
                    }}
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{
                            width: wp('42%'), marginLeft: wp('5%'), marginRight: wp('2%'),
                            height: hp(20), borderRadius: 30, elevation: 2, borderWidth: 1,
                            borderColor: 'blue', marginBottom: 10, backgroundColor: 'rgba(9,132,226,1)', justifyContent: 'center', alignItems: 'center'
                        }}
                            onPress={() => { props.navigation.navigate(item.Page) }}
                        >
                            <Text style={{
                                textAlign: 'center', justifyContent: 'center'
                                , fontSize: wp(4), alignItems: 'center', color: 'white',
                                alignSelf: 'center', fontFamily: 'Anjoman-Medium'
                            }}>{item.Name}</Text>

                            <Image style={{ width: 60, height: 60 }} source={item.Photo}
                                resizeMode="stretch"
                            />

                        </TouchableOpacity>
                    )}

                />


            </Drawer>

        </View>



    );
}


const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    ChildViewStyle: {
        justifyContent: 'center', alignItems: 'center',
        borderRadius: wp(7.5), width: wp(15), height: wp(15), borderWidth: 1, backgroundColor: 'yellow'
        , position: 'absolute',
    },
    TouchAdvstyle:
    {
        width: '100%', height: '95%',
        borderRadius: 10, overflow: 'hidden', backgroundColor: 'blue'
    },
    rootAdvertisement:
    {
        width: wp('96%'), height: hp('30%'), marginHorizontal: wp('2%')
    },
    rootProgram:
    {
        width: wp('96%'), height: 270, marginHorizontal: wp('2%')
    },
    rootViewSmallProgram:
    {
        width: ('50%'), height: hp('15%'), flexDirection: 'row'
    },
    rootViewSmallProgramStores:
    {
        width: 80, height: 120, marginHorizontal: wp('3%')
    },
    ViewDirectionStores:
    {
        justifyContent: 'center', alignItems: 'center'
    },
    ViewDirectionOffer:
    {
        justifyContent: 'space-between', alignItems: 'center', height: '55%',
        marginTop: '15%', flexDirection: 'column', marginLeft: '5%'
    },
    SpecialView: {
        marginTop: 10, marginBottom: 10
    },
    TitleBarView:
    {
        width: wp('94%'), marginHorizontal: wp('3%'), marginBottom: 10
    },
    TitleBarText:
    {
        color: 'rgba(9,132,226,1)', textTransform: 'capitalize', fontFamily: 'Roboto-Regular', fontWeight: 'bold'
    },
    RoundStyle:
    {
        borderWidth: 1
        , borderRadius: 20, borderColor: 'transparent'
        , backgroundColor: 'rgba(9,132,226,1)',
        padding: wp('5%'), margin: 5, height: 40
        , justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
    },
    RoundTitleStyle:
    {
        textAlign: 'center', textTransform: 'capitalize', fontFamily: 'Roboto-Regular'
    },
    RoundHolderStyle:
    {

        borderRadius: 20, width: wp('20%'), height: 40, backgroundColor: 'gray', borderRadius: 10, marginTop: 10, marginHorizontal: 10
    },
    SpecialLine:
    {
        width: wp('90%'), height: 0.5, marginHorizontal: wp('5%'), borderColor: 'transparent', elevation: 1
    },
    tagProgramStyle:
    {
        marginTop: 5
    },
    divider:
    {
        alignSelf: 'stretch', backgroundColor: '#dedddc'
    },










});
