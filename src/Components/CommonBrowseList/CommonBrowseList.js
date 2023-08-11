import React, {useEffect, useCallback} from 'react';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import BrowseList from '../BrowseList/BrowseList';

//Utils
import Action from '../../redux/action';
import Routes from '../../navigation/Routes';
import {navigate} from '../../utility/NavigationService';

//Dummy Data
import BrowseListDummy from '../../DummyData/BrowseListDummy';

const CommonBrowseList = props => {
  const dispatch = useDispatch();
  const storeBrowseListData = useCallback(
    () => dispatch(Action.storeBrowseList(BrowseListDummy.data)),
    [dispatch],
  );

  //Use the data loaded from dummy data to create a browse list array that will be used by the component
  const browseList = useSelector(state => state.browseList, []);

  useEffect(() => {
    storeBrowseListData();
  }, [storeBrowseListData]);

  /*---- Display BrowseList Component using the information----*/
  return (
    <BrowseList
      informationArray={browseList}
      onPress={title =>
        navigate(Routes.RestaurantsListing, {
          headerTitle: props.headerTitle,
          topTitle: title,
        })
      }
    />
  );
};

export default CommonBrowseList;
