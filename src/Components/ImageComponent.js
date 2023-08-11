import Image from 'react-native-image-progress';
import Progress from 'react-native-progress/Pie';
import React from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default ImageComponent =(props) =>{

return (

   <Image 
   style = {[props.style,{ 
    }]}
   source={props.source}
   resizeMode={props.resizeMode}

   indicator={Progress}
   indicatorProps={{
       size: 30,
       borderWidth: 0,
       color: '#ad1456',
       unfilledColor: 'grey'
   }}


   />

)

}