import PushNotification from 'react-native-push-notification';
import {Platform} from "react-native";
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
class Notifications {
  constructor() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        // console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
       // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    });

    PushNotification.createChannel(
      {
        channelId: 'reminders', // (required)
        channelName: 'Task reminder notifications', // (required)
        channelDescription: 'Reminder for any tasks',
        playSound:true,
        vibrate:true,
        soundName:'default'
        
      },
      () => {},
    );

    PushNotification.getScheduledLocalNotifications(rn => {
      console.log('SN --- ', rn);
    });
  }

  schduleNotification(date,chanelId,title,message) {
    PushNotification.localNotificationSchedule({
      id:chanelId,
      channelId: 'reminders',
      title: title,
      message: message,
      date,
      playSound:true,
      soundName:'default',
       vibrate:true,
       
      
      
    });
  }

  schduleRepeatNotification(date,chanelId,title,message) {
    PushNotification.localNotificationSchedule({
      id:chanelId,
      channelId: 'reminders',
      title: title,
      message: message,
      date,
      playSound:true,
      soundName:'default',
      vibrate:true,
      repeatType:'day',
      repeatTime:1, 
    });
  }
  cancelLocalNotification(id)
  {
    PushNotification.cancelLocalNotifications({ id: id })
  }
}

export default new Notifications();