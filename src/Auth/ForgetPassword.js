import React, { Component, useState,useEffect } from "react";
import { StyleSheet, View, 
    Text,TouchableOpacity,Alert,ScrollView
    ,ActivityIndicator ,BackHandler,Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Textinputs from '../Components/Textinputs'
import Buttons from '../Components/Buttons'
import { Icon }  from "react-native-elements";
import axios from 'axios'



export default ForgetPassword = (props) =>{


   const[Mobile,setMobile] = useState('')
   const[MobileError,setMobileError]=useState('')
   const[showLoader,setshowLoader] = useState(false)

   let CheckError=()=>{

    var checkState=false
    setMobileError('')
  
    if(Mobile.toString().trim() == '')
    {
       const MobileError='لطفا شماره تماس را وارد کنید'
       setMobileError(MobileError)
      checkState=true
    }
    
    return  checkState;
    
  }
  let  toEnglishDigits=(str)=> {

    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    var e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function(t) {
        return t.charCodeAt(0) - e;
    });

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function(t) {
        return t.charCodeAt(0) - e;
    });
    return str;
}

    let generateNumber=()=>{
      var RandomNumber = Math.floor(Math.random() * 10000) + 1 ;
      return RandomNumber;
    }

    let Forget=()=>{
      var checkData= CheckError()
      if(!checkData)
      {
        var Number = generateNumber();
        setshowLoader(true)
        var Body = {
          "Mobile": toEnglishDigits(Mobile),
          "Password": Number.toString()
      }
      
       axios.post('https://bizhan.iran.liara.run/api/UpdateUsersPassword',Body)
      
      .then( (response)=> {
        
             
               console.log('response data 11',response.data) 
              if(response.data.data.toString() == "400")
              {
                Alert.alert('اخطار','کاربر با مشخصات مورد نظر پیدا نشد')
                setshowLoader(false)
              }
              else  if(response.data.data.toString() == "200")
              {
                console.log('response result 1 : ',Number) 
                //setshowLoader(false)
                SendMessage(Number.toString())
              }
              
             
      })
      .catch( (error)=> {
        setshowLoader(false)
        Alert.alert('1اخطار','ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید')
      })
      }
    }


    let SendMessage=(Number)=>{
    //   var Body = {
    //     "SmsBody": "رمز عبور جدید شما : 123456789",
    //     "Mobiles": [
    //       Mobile.toString()
    //     ],
    //     "SmsNumber": "10000000123000"
    // }
    // var Headers={
    //   'Content-Type': 'application/json',
    // 'Authorization': 'basic apikey:AF4FF489-CFD0-4E98-A298-77BA52B80A0D'
    //   }
    
    //  axios.post('https://sms.parsgreen.ir/Apiv2/Message/SendSms',Headers,Body)
    
    let data = JSON.stringify({
      "SmsBody": "رمز عبور جدید شما : "+ Number.toString(),
      "Mobiles": [
        toEnglishDigits(Mobile).toString()
      ],
      "SmsNumber": "1000000123000"
    });
    
    let config = {
      method: 'post',
      url: 'https://sms.parsgreen.ir/Apiv2/Message/SendSms',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'basic apikey:AF4FF489-CFD0-4E98-A298-77BA52B80A0D'
      },
      data : data
    };
    
    axios.request(config)

    .then( (response)=> {     
             console.log('response 11 12 : ',response.data.R_Success ) 
             if(response.data.R_Success == true)
             {
             props.navigation.navigate('ChangePasswordAccept',{data:'رمز عبور با موفقیت برای شما ارسال گردید'})
             }
             else
             {
              Alert.alert('1اخطار','مشکلی پیش آمده است لطفا دوباره تلاش کنید')
             }

            setshowLoader(false)
    })
    .catch( (error)=> {
      setshowLoader(false)
      console.log('response error 12',error) 
    })
    }

  




    return (
     <View style={styles.root}>
       <ScrollView>
     <View style={{width:wp('100%'),height:hp('10%')}}>
  
     </View>

      <View style={{width:wp('100%'),height:hp('40%')}}>

        <View style={{marginTop:'10%'}}>
          <Icon name='lock' color='rgba(9,132,226,1)' size={wp('20%')}/>
        </View>
      <View style={{marginTop:'10%',justifyContent:'center'
       ,alignItems:'center',alignSelf:'center'}}>
      <Text style={{color:'rgba(9,132,226,1)',
        fontSize:wp('6%'),textAlign:'center'}}>
        فراموشی رمز عبور
        </Text>
        </View>

        <View style={{marginTop:5,justifyContent:'center'
       ,alignItems:'center',alignSelf:'center',marginBottom:'5%'}}>
      <Text style={{color:'rgba(9,132,226,1)',
        fontSize:wp('4%'),textAlign:'center'}}>
         برای بازیابی حساب شماره تماس را وارد کنید
        </Text>
        </View>

     
      </View>



      <View style={{width:wp('100%'),height:hp('50%')
      ,bottom:0,backgroundColor:'rgba(9,132,226,1)',borderTopLeftRadius:50,borderTopRightRadius:50
      ,borderTopWidth:1,borderTopColor:'transparent'}}>


<Textinputs
       changeText = {(value)=>{setMobile(value)}}
       values = {Mobile}
       placeHolder='شماره تماس'
       TextStyle={{fontSize:wp('4%'),color:'white',width:'100%'
       ,height:'100%'}}
       style={{width:wp('70%'),marginHorizontal:'15%'
       ,height:hp('7%')
       ,marginTop:'15%'}}
       IconName='phone'
       IconColor='rgba(9,132,226,1)'
       ErrorTitle={MobileError}
       BottomLine={{backgroundColor:'white'}}
       IconView={{backgroundColor:'white'}}
       ErrorTitleStyle={'white'}
       placeholderTextColor={'white'}
     /> 
          {showLoader ?
<ActivityIndicator size='large' color='white' 
style={{width:wp('40%')
,marginHorizontal:wp('30%'),
justifyContent:'center',alignItems:'center',marginTop:30}}/>
:
<Buttons
      ButtonStyle={{backgroundColor:'white'
      ,width:wp('40%'),marginHorizontal:wp('30%'),
      borderRadius:15,height:50,marginTop:30,
      justifyContent:'center',alignItems:'center'
      // ,position:'absolute',bottom:1
      }}
      titleStyle={{color:'rgba(9,132,226,1)',fontSize:wp('3.5%'),textAlign:'center'}}
      titleText='تایید'
      ButtonOperator={()=>{Forget()}}/>

    }
      



      </View>

 
  


</ScrollView>
     </View>
      
       
      
    );
  }


const styles = StyleSheet.create({
  root: {
  flex:1
  },
  
});
