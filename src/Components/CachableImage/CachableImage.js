import React from 'react';

// Third Party
import FastImage from 'react-native-fast-image';

//Fast Images are great for image caching
//https://www.npmjs.com/package/react-native-fast-image
const CachableImage = props => <FastImage {...props} />;

export default CachableImage;
