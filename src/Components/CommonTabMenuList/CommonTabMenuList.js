import React, {useEffect, useCallback} from 'react';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import TabMenuItem from '../TabMenuItem/TabMenuItem';
import TabMenuList from '../TabMenuList/TabMenuList';

//Utils
import Action from '../../redux/action';

//Dummy Data
import TabSelectionDummyData from '../../DummyData/TabSelectionDummyData';

const CommonTabMenuList = () => {
  const dispatch = useDispatch();
  //set the data from dummy data for tab menu
  const storeTabMenuData = useCallback(
    () => dispatch(Action.storeTabMenuItems(TabSelectionDummyData.data)),
    [dispatch],
  );
  const tabMenuList = useSelector(state => state.tabMenuList, []);

  useEffect(() => {
    storeTabMenuData();
  }, [storeTabMenuData]);

  //What happens when toggling a tab item?
  const changingTabStatus = item => {
    dispatch(Action.toggleTabMenuItem(item));
  };

  //Single Tab Menu Item which gets information from tabMenuList
  const renderTabMenuRows = ({item}) => {
    return (
      <TabMenuItem
        key={'tab_' + item.id}
        itemData={item}
        onPress={itemData => changingTabStatus(itemData)}
        title={item.title}
        isActive={item.isActive}
        componentMarginRight={10}
        iconComponent={item.iconPath}
      />
    );
  };

  //List of all tab menu items that have horizontal slide
  return (
    <TabMenuList
      informationArray={tabMenuList}
      customSlideComponent={renderTabMenuRows}
    />
  );
};

export default CommonTabMenuList;
