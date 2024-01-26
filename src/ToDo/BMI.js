import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground, ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Textinputs from "../Components/Textinputs";
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


export default BMI = (props) => {


  const [height, setheight] = useState(0)
  const [mass, setmass] = useState(0)
  const [resultNumber, setresultNumber] = useState(0)
  const [resultText, setresultText] = useState(0)
  const [ShowText, setShowText] = useState('')
  const [ShowDetails, setShowDetails] = useState('')
  const drawerRef = useRef();
  let handleCalculate = () => {
    let imc = (mass) / ((height / 100) * (height / 100));
    setresultNumber(imc.toFixed(2))


    if (imc < 18.5) {
      setresultText(imc.toFixed(2))
      setShowText('فرد باید با مراجعه به پزشک در مورد پایین بودن وزن خود صحبت کند و در صورتی که مشکل خاصی وجود ندارد به کمک یک متخصص تغذیه وزن خود را تا حد بازه ایده آل افزایش دهد.')
      setShowDetails('دچار کاهش وزن هستید')
    } else if (imc > 18.5 && imc < 25) {
      setresultText(imc.toFixed(2))
      setShowText('این فرد می تواند با حفظ رژیم غذایی و سبک زندگی سالم و ورزش، وزن خود را در این محدوده حفظ کند و سلامتی نسبی خود را داشته باشد.')
      setShowDetails('وزن شما طبیعی هست')
    } else if (imc >= 25 && imc < 30) {
      setresultText(imc.toFixed(2))
      setShowText(`باید به پزشک متخصص مراجعه کرده و در مورد اضافه وزن خود، درمانی را به شکل دارویی، رژیم و … آغاز کند.
در این محدوده، فرد می تواند با رعایت مواردی که پزشک توصیه می کند، وزن خود را خیلی راحت تر کاهش دهد بدون اینکه نیاز به جراحی لاغری داشته باشد.
`)
      setShowDetails('اضافه وزن دارید')
    } else {
      setresultText(imc.toFixed(2))
      setShowText('این فرد، چاق محسوب می شود و باید به پزشک مراجعه کرده و درمان خود را به شیوه ای که پزشک تجویز می کند شروع کند.')
      setShowDetails('دچار چاقی هستید')
    }
  };


  let closeDrawer = () => {
    drawerRef?.current._root.close()
  }

  let openDrawer = () => {
    drawerRef?.current._root.open()
  }

  return (

    <View style={styles.container}>

      <Drawer
        ref={drawerRef}
        side='right'
        content={<Sidemenu navigation={props.navigation} />}
        onClose={() => closeDrawer()}
        openDrawerOffset={0.4}
        panCloseMask={0.5}
        acceptPan={true}
      >
        <ScrollView>
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
              }}>BMI</Text>
            </View>

            <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => { openDrawer() }}>
                <Icon name='menu' color='white' />
              </TouchableOpacity>
            </View>
            {/* <View style={{ width: wp('10%') }}>

                </View> */}
          </View>
          {/* <View style={{ width: wp('100%'), height: hp('35%') }}> */}
            <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: '15%' }}>
              <CircleLogo
                onPress={() => { }}
                circleDiameter={wp('15%')}
                children={<Text
                  style={{ color: 'white', fontSize: wp('3%') }}>BMI</Text>}
              />
            </View>





            <View style={{
              justifyContent: 'center', alignItems: 'center', marginTop: 30, paddingHorizontal: wp(4),marginBottom:30
            }}>
              <Text style={{
                color: 'white',
                fontSize: wp('4%'), textAlign: 'center'
              }}>
                {/* محاسبه BMI */}
                شاخص توده بدنی (BMI) به عنوان یک شاخص بین المللی برای تعریف وزن متناسب با قد و نیز چاقی و افزایش وزن به کارمی‌رود. BMI، تنها یک شاخص است که به شما نشان می‌دهد وزن سلامت شما بر اساس قدتان چه میزان است.
              </Text>
            </View>



          {/* </View> */}

          <View style={{
            justifyContent: 'center', alignItems: 'center', width: wp('80%'),
            marginHorizontal: wp(10), borderRadius: 10, borderWidth: 0.5, elevation: 2, marginTop: 10, backgroundColor: '#deeafc', marginBottom: 20

          }}>
            <Text style={{
              alignSelf: "center",
              color: "red",
              fontSize: wp(3), padding: 10
            }}>این ارزیابی ها نباید در زنان باردار یا شیرده،ورزشکاران و کسانی که استخوان بندی درشت دارند و افراد خیلی قد بلند و کوتاه استفاده شود.</Text>
          </View>


          <Textinputs
            changeText={(value) => { setheight(value) }}
            values={height}
            placeHolder="قد به سانتیمتر"
            TextStyle={{
              fontSize: wp('4%'), color: 'white', width: '100%'
              , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
            }}
            style={{
              width: wp('50%'), marginHorizontal: '15%'
              , height: hp('7%')
              , marginTop: 20, justifyContent: 'center', alignSelf: 'center'
            }}
            IconName='human-male-height'
            IconType='material-community'
            ErrorTitle={''}
            IconView={{ backgroundColor: 'white' }}
            ErrorTitleStyle={{ color: 'rgba(9,132,226,1)' }}
            BottomLine={{ backgroundColor: 'white' }}
            placeholderTextColor={'white'}
            IconColor='rgba(9,132,226,1)'
            keyboardtype='numeric'
          />


          <Textinputs
            changeText={(value) => { setmass(value) }}
            values={mass}
            placeHolder="وزن به کیلوگرم"
            TextStyle={{
              fontSize: wp('4%'), color: 'white', width: '100%'
              , height: '100%', borderBottomWidth: 1, borderBottomColor: 'transparent'
            }}
            style={{
              width: wp('50%'), marginHorizontal: '15%'
              , height: hp('7%')
              , marginTop: 30, justifyContent: 'center', alignSelf: 'center'
            }}
            IconName='weight-kilogram'
            IconType='material-community'
            ErrorTitle={''}
            IconView={{ backgroundColor: 'white' }}
            ErrorTitleStyle={{ color: 'rgba(9,132,226,1)' }}
            BottomLine={{ backgroundColor: 'white' }}
            placeholderTextColor={'white'}
            IconColor='rgba(9,132,226,1)'
            keyboardtype='numeric'
          />


          <TouchableOpacity
            style={styles.button}
            onPress={handleCalculate}
          >
            <Text style={styles.buttonText}>محاسبه </Text>
          </TouchableOpacity>
          <View style={{
            flexDirection: "row-reverse", justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center'
            , width: wp(90), marginHorizontal: wp(5), marginTop: 40
          }}>
            {ShowDetails != '' &&
              <Text style={styles.result}>شاخص توده بدنی شما برابر با </Text>

            }
            {ShowDetails != '' &&
              <Text style={[styles.result, { color: 'red' }]}>{resultText}</Text>
            }
            {ShowDetails != '' &&
              <Text style={[styles.result, { color: 'white' }]}> و {ShowDetails}</Text>

            }
            {/* <Text style={styles.result}>است</Text> */}


          </View>
          {ShowText != '' &&
            <View style={{
              justifyContent: 'center', alignItems: 'center', width: wp('80%'),
              marginHorizontal: wp(10), borderRadius: 10, borderWidth: 0.5, elevation: 2, marginTop: 10, backgroundColor: '#deeafc', marginBottom: 10

            }}>
              <Text style={{
                alignSelf: "center",
                color: "green",
                fontSize: wp(4),
                padding: 15
              }}>{ShowText}</Text>
            </View>
          }




        </ScrollView>
      </Drawer>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(9,132,226,1)"
  },
  intro: {
    // flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "#FFCB1F"
  },
  button: {
    backgroundColor: "white", width: wp(30), height: 50, borderRadius: 10,
    elevation: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: wp(35), marginTop: 20
  },
  buttonText: {
    alignSelf: "center",
    // padding: 30,
    fontSize: wp(4),
    color: "rgba(9,132,226,1)",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "white",
    fontSize: wp(4),
    padding: 15,
  }
});