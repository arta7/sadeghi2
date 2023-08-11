import React, { useState } from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import Main from './Main'
import { Icon }  from "react-native-elements";
import LottieView from 'lottie-react-native';
import Login from '../Auth/Login';
import QRCodes from './QRCodes'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CenterModal from './../Components/CenterModal'
let Loop = false




const activeHome = (isPlay,loops) => {
  return (
    <View style={{ width: 40, height: 40 }}>
      <LottieView source={require('./../Images/Home.json')} autoPlay={isPlay} loop={loops} />
    </View>
  )
}


const activeProfile = (isPlay,loops) => {
  return (
    <View style={{ width: 40, height: 40 }}>
      <LottieView source={require('./../Images/Profile.json')} autoPlay={isPlay} loop={loops}  />
    </View>
  )
}
const tabData = [
  {
    name: 'Home',
    activeIcon: <Icon name= 'home' size={40} color='white' type='font-awesome'/>,
    inactiveIcon: <Icon name= 'home' size={40} color='white' type='font-awesome'/>
  },
  {
    name: 'Profile',
    activeIcon:<Icon name= 'user' size={40} color='white' type='font-awesome' />,
    inactiveIcon:  <Icon name= 'user' size={40} color='white' type='font-awesome' />
  },
]

const Controls = (props) => {
  const [tabs, setTabs] = useState(tabData)
  const[currentTab,setcurrentTab] = useState('Home')
  const[isLoop,setisLoop] = useState(false)

   const[showModal,setshowModal] = useState(false)


  const onTabChange = (item) => {
    console.log('tab',item)
   
    let tempTabs =[...tabs]
   
    setTimeout(() => {                  
      tempTabs.map((val) => {
        if (item.name == 'Home' ) {
          setcurrentTab('Home')
          setTabs(tempTabs)
        } else if ( item.name == 'Profile') {
          setcurrentTab('Profile')
          setTabs(tempTabs)
        }
      
      
      })

    }, 500);
  
  }


  return (

    <View style={[styles.container]}>
    

       <ScrollView>
         {
    currentTab == 'Home' ? <Main navigation={props.navigation} /> : currentTab == 'Profile' ? <Login navigation={props.navigation} /> 
  :
   <QRCodes navigation={props.navigation} />
    
         }
       </ScrollView>
      <Tabbar 
        tabs= {tabs}          
        tabBarContainerBackground={'#ad1456'}  
        tabBarBackground={currentTab != 'QRCode' ? '#ad1456' : 'transparent'}    
        activeTabBackground={'#ad1456' }     
        labelStyle={styles.TabbarLabel}
        onTabChange={(item) => onTabChange(item)}
      />
       <TouchableOpacity style={styles.MainQRCode}
      onPress={()=>{
        setshowModal(true)
      }}
      >
       <Icon name= 'keyboard-arrow-up' size={40} color='#ad1456'  />
      </TouchableOpacity>

      <CenterModal 
     showModal={showModal}
     closeModal={()=>{setshowModal(false)}}
    //  childrenItem={<QRCodes />}
    />
    </View>
  )

}

export default Controls

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MainQRCode:
  { 
    width: 50, height: 50,borderRadius:25,justifyContent:'center',alignItems:'center'
    ,borderColor:'gray',backgroundColor:'white',position:'absolute',bottom:5,right:wp('45%')
  },
  TabbarLabel:
  { 
    color: 'white', fontWeight: '600', fontSize: 15,fontFamily:'Roboto-Regular' 
  }
})