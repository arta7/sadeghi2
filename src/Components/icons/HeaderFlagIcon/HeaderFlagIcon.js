import React from 'react';
import {useSelector} from 'react-redux';

//Publicly Available Icons that Can be Used for Commercial Purposes
import GEORGIAFLAG from '../../../assets/icons/flagIcons/georgianSVG.svg';
import RUSSIAFLAG from '../../../assets/icons/flagIcons/russianSVG.svg';
import TURKEYFLAG from '../../../assets/icons/flagIcons/turkeySVG.svg';
import USAFLAG from '../../../assets/icons/flagIcons/usaSVG.svg';

import {
  ENGLISH_LANGUAGE,
  GEORGIAN_LANGUAGE,
  RUSSIAN_LANGUAGE,
  TURKISH_LANGUAGE,
} from '../../../constants/constants';
import {screenWidth} from '../../../utility/Scale';

const HeaderFlagIcon = () => {
  let flag = useSelector(state => state.selectedLanguage);

  switch (flag) {
    case ENGLISH_LANGUAGE:
      return (
        <USAFLAG width={screenWidth * 0.054} height={screenWidth * 0.054} />
      );

    case RUSSIAN_LANGUAGE:
      return (
        <RUSSIAFLAG width={screenWidth * 0.054} height={screenWidth * 0.054} />
      );

    case GEORGIAN_LANGUAGE:
      return (
        <GEORGIAFLAG width={screenWidth * 0.054} height={screenWidth * 0.054} />
      );

    case TURKISH_LANGUAGE:
      return (
        <TURKEYFLAG width={screenWidth * 0.054} height={screenWidth * 0.054} />
      );

    default:
      return (
        <USAFLAG width={screenWidth * 0.054} height={screenWidth * 0.054} />
      );
  }
};
export default HeaderFlagIcon;
