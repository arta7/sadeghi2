
import React, {useEffect, useState} from 'react';
import {
  TabNavigator,
  TabBarBottom,
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import Login from './src/Auth/Login'
import Register from './src/Auth/Register'
// import OTPAccept from './src/Auth/OTPAccept'
import ForgetPassword from './src/Auth/ForgetPassword'
import ChangePassword from './src/Auth/ChangePassword'
import ChangePasswordAccept from './src/Auth/ChangePasswordAccept'
// import SplashIntro from './src/Intro/SplashIntro'
import Main from './src/Main/Main'
import StoreProgram from './src/Profile/StoreProgram'
import Medicalknowledge from './src/ListItems/Medicalknowledge'
import Managementsolutions from './src/ListItems/Managementsolutions'
import LifeStyle from './src/ListItems/LifeStyle'
 import Profiles from './src/Profile/Profiles'
import DoctorTodo from './src/ToDo/DoctorTodo'
import BloodTest from './src/ToDo/BloodTest'
import DrugsTodo from './src/ToDo/DrugsTodo'
import ReminderSelector from './src/Main/ReminderSelector'
import BMI from './src/ToDo/BMI'
import VideoFile from './src/Main/VideoFile'
import ShowVideo from './src/Main/ShowVideo'
import VideoFileList from './src/Main/VideoFileList'







var AppContainer = createStackNavigator({ 
          Main:{
            screen:Main
          },  
          StoreProgram:
          {
            screen:StoreProgram
          },
          Medicalknowledge:
          {
            screen:Medicalknowledge
          },
         Login:
           {
         screen:Login
           },
           Register:
           {
         screen:Register
           },
           ForgetPassword:{
               screen:ForgetPassword
           },
           LifeStyle:{
            screen:LifeStyle
        },
        ChangePassword:{
            screen:ChangePassword
        },
        ChangePasswordAccept:{
            screen:ChangePasswordAccept
        },
        ShowVideo:{
          screen:ShowVideo
        },
        ReminderSelector:{
          screen:ReminderSelector
        },
        Managementsolutions:{
          screen:Managementsolutions
        },
        DoctorTodo:{
          screen:DoctorTodo
        },
        DrugsTodo:{
          screen:DrugsTodo
        },
        Profiles:{
          screen:Profiles
        },
        BMI:{
          screen:BMI
        },
        VideoFileList:{
          screen:VideoFileList
        },
        VideoFile:{
          screen:VideoFile
        },
        BloodTest:{
          screen:BloodTest
        }


},
 {
    headerMode: 'none',
    initialRouteName: 'Login'

  }
 
 )

export default createAppContainer(AppContainer);
