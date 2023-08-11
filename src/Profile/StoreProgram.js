import React, { useRef, useState, useEffect, useContext } from "react";
import {
    StyleSheet, View,
    TouchableOpacity, Alert, ScrollView
    , ActivityIndicator, BackHandler, FlatList, Image, Linking, Text
} from "react-native";
import axios from 'axios'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon, Rating } from "react-native-elements";
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


import RenderHtml from 'react-native-render-html';


export default StoreProgram = (props) => {
    const [showIcon, setshowIcon] = useState(false)
    const drawerRef = useRef();
    // const value = useContext(Redux);

    const data = props.navigation.getParam('data', null)

    let closeDrawer = () => {
        drawerRef?.current._root.close()
    }

    let openDrawer = () => {
        drawerRef?.current._root.open()
    }

    let checkItemIcon = (t) => {
        switch (t) {
            case 0:
                return <Icon name='link' color='black' type='font-awesome-5' size={20} />

            case 1:
                return <Icon name='globe-americas' color='black' type='font-awesome-5' size={20} />

            case 2:
                return <Icon name='card-travel' color='black' size={20} />

            case 3:
                return <Icon name='credit-card' color='black' type='font-awesome-5' size={20} />

        }

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
                    }}>{data.Title}</Text>
                </View>
                <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity  onPress={()=>{openDrawer()}}>
                          <Icon name='menu' color='white' />
                    </TouchableOpacity>
                </View>
                {/* <View style={{ width: wp('10%') }}>

                </View> */}
            </View>


            <ScrollView>




                <View style={styles.showMainImageView}>
                    <Image source={data?.photo}
                        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                        resizeMode='stretch' />


                </View>


                <View style={styles.rootProgram}>

                   
                    <RenderHtml
                        source={{html:'<body style="font-size: 1.1rem;padding:5px;text-align: right;"'+data.Description+'</body>'}} 
                        
                    />

                </View>

            </ScrollView>
</Drawer>
        </View>






    );
}


const styles = StyleSheet.create({
    root: {
        flex: 1
        //,backgroundColor:'rgba(9,132,226,1)'
    },
    rootProgram:
    {
        width: wp('90%'), marginHorizontal: wp('5%'), elevation: 1, borderWidth: 0.5
        , borderColor: 'grey', borderRadius: 10, padding: 10, marginBottom: 10
    },
    BottomView:
    {
        flex: 1
        // width:wp('100%')

    },
    BottomIconView:
    {
        left: '10%', top: -hp('20%'), position: 'absolute',
        borderWidth: 1, width: wp('20%'), height: wp('20%'), borderRadius: 10, alignSelf: 'stretch',
        backgroundColor: 'white', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', borderColor: 'rgba(9,132,226,1)'
    },
    TitleView:
    {
        justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: 5
    },
    RatingView:
    {
        justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 10
    },
    TitleText:
    {
        color: 'black', textAlign: 'center',
        fontFamily: 'Roboto-Regular', fontSize: wp(5), fontWeight: 'bold', marginBottom: 10, marginTop: 5
    },
    DetailsView:
    {
        flexDirection: 'row'
    },
    DetailsText:
    {
        fontFamily: 'Roboto-Regular', fontSize: wp(4), textAlign: 'right'
    },
    ButtonStyle:
    {
        backgroundColor: 'rgba(9,132,226,1)'
        , width: wp('40%'), marginHorizontal: wp('30%'),
        borderRadius: 15, height: 40,
        justifyContent: 'center', alignItems: 'center',
        borderWidth: 1, borderColor: 'rgba(9,132,226,1)', bottom: '3%', position: 'absolute'
    },
    ButtonTitleStyle:
    {
        color: 'white', textAlign: 'center', textTransform: 'capitalize', fontFamily: 'Roboto-Regular'
    },
    renderFixView:
    {
        flexDirection: 'row', height: 100, width: wp('100%')
    },
    showIconView:
    {
        width: 35, height: 35, borderRadius: 10, justifyContent: 'center'
        , alignItems: 'center', marginHorizontal: wp('44%')
        , position: 'absolute', top: 5
    },
    renderShowIconImage:
    {
        width: '100%', height: '100%', overflow: 'hidden', borderRadius: 10
    },
    showMainImageView:
    {
        width: wp('90%'), height: hp(30), overflow: 'hidden', borderRadius: 10, elevation: 1, marginHorizontal: wp(5), marginTop: 20, marginBottom: 20
    },
    ImageComponentTop:
    {
        left: '10%', bottom: -hp('5%'), position: 'absolute',
        borderWidth: 1, width: wp('20%'), height: wp('20%'), borderRadius: 10,
        backgroundColor: 'white', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', borderColor: 'rgba(9,132,226,1)'
    },
    ImageComponentBottom:
    {
        left: '10%', top: -hp('3%'), position: 'absolute',
        width: wp('20%'), height: wp('20%'), borderRadius: 10,
        backgroundColor: 'white', overflow: 'hidden', justifyContent: 'center', alignItems: 'center'
    },
    RoundStyle:
    {
        borderWidth: 1
        , borderRadius: 20, borderColor: 'transparent'
        , backgroundColor: 'rgba(9,132,226,1)',
        padding: wp('1.5%'), margin: 5, height: 20
        , justifyContent: 'center', alignItems: 'center', marginBottom: 10
    },
    RoundStyleTags:
    {
        borderWidth: 1
        , borderRadius: 20, borderColor: 'transparent'
        , backgroundColor: 'rgba(9,132,226,1)',
        padding: wp('3%'), margin: 5, height: 30
        , justifyContent: 'center', alignItems: 'center', marginBottom: 10
    },
    RoundTitleStyle:
    {
        textAlign: 'center', color: 'white', textTransform: 'capitalize', fontFamily: 'Roboto-Regular'
    },
    SepratorStyle:
    {
        // width:wp('90%'),marginRight:wp('5%'),height:1,elevation:1,borderColor:'transparent',borderWidth:0.5,marginVertical:3
        width: wp('90%'), height: 0.5, marginRight: wp('5%'), borderColor: 'transparent', elevation: 1
    },
    divider:
    {
        alignSelf: 'stretch', backgroundColor: '#dedddc', marginVertical: 5
    }

});
