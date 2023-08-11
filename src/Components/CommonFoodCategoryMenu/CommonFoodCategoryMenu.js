import React from 'react';
import {FlatList} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import BorderCategoryWithBelowTitle from '../BorderCategoryWithBelowTitle/BorderCategoryWithBelowTitle';

//Utils
import Action from '../../redux/action';
import Routes from '../../navigation/Routes';

import globalStyles from '../../assets/styles/globalStyles';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {screenWidth} from '../../utility/Scale';

const CommonFoodCategoryMenu = props => {
  const dispatch = useDispatch();

  //Get Food options from the redux state
  const foodOptionsList = useSelector(state => state.foodOptions, []);

  const changingTabStatus = item => {
    dispatch(Action.toggleFoodOption(item));
  };

  const renderTopCategoriesRows = ({item}) => {
    return (
      <BorderCategoryWithBelowTitle
        key={'border_category_below_title_' + item.id}
        onPress={() => {
          changingTabStatus(item.id);
          if (props.shouldNavigate) {
            props.navigation.navigate(Routes.SliderSelectedScreen, {
              topTitle: item.title,
            });
          }
        }}
        title={item.title}
        description={item.description}
        activeImageComponent={item.activeImageComponent}
        inactiveImageComponent={item.inactiveImageComponent}
        informationAlignment={'centered'}
        titleFontSize={16}
        titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
        titleFontWeight={'normal'}
        titlePaddingTop={7}
        descriptionFontFamily={FONT_FAMILY.RobotoThin}
        descriptionFontWeight={'300'}
        descriptionFontSize={11}
        descriptionFontColor={allColors.black}
        descriptionPaddingTop={1}
        componentPaddingTop={15}
        componentMarginRight={10}
        componentPaddingBottom={16}
        isActive={item.isActive}
        componentBorderRadius={15}
        componentWidth={screenWidth * 0.23}
      />
    );
  };

  return (
    <FlatList
      //performance settings
      //initialNumToRender={1} // Reduce initial render amount
      //maxToRenderPerBatch={1} // Reduce number in each render batch
      // windowSize={7} // Reduce the window size
      showsHorizontalScrollIndicator={false}
      data={foodOptionsList}
      horizontal
      renderItem={renderTopCategoriesRows}
      contentContainerStyle={globalStyles.paddingLeftGeneral}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
};

export default CommonFoodCategoryMenu;
