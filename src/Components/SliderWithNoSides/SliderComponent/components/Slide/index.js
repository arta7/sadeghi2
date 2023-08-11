import React from 'react';
import {View} from 'react-native';

//Utils
import globalStyles from '../../../../../assets/styles/globalStyles';
// import Routes from '../../../../../navigation/Routes';
// import {navigate} from '../../../../../utility/NavigationService';

//Components
import SingleFoodItemInfo from '../../../../SingleFoodItemInfo/SingleFoodItemInfo';

//Third Party
import PropTypes from 'prop-types';

const CarouselSlide = props => {
  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.justifySpaceBetween,
        globalStyles.horizontalGeneralPadding,
        globalStyles.widthScreenWidth,
      ]}>
      {props.cards.map((item, index) => {
        return (
          <View key={ index}>
            <SingleFoodItemInfo
              index={index}
              title={item.name}
              // rating={item.rating}
              // deliveryTime={item.deliveryTime}
              // description={item.description}
              // deliveryFee={item.deliveryFee}
              imageIconPath={ props.Address +  item.icon.url}
             
               // navigate(Routes.AddToCartScreen, {title: props.title})
              
            />
          </View>
        );
      })}
    </View>
  );
};
/*---- Default Props Start -------*/
CarouselSlide.defaultProps = {
  cards: [],
  title: '',
};
/*---- Default Props End -------*/
/*---- Prop Type Expectations Start -------*/
CarouselSlide.propTypes = {
  cards: PropTypes.array,
  title: PropTypes.string,
};
export default CarouselSlide;
