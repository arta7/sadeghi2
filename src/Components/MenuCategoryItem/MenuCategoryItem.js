import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';
import ViewMoreText from 'react-native-view-more-text';

//Component
import CachableImage from '../CachableImage/CachableImage';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import UnderlineTextIcon from '../UnderlineTextIcon/UnderlineTextIcon';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {FONT_FAMILY} from '../../constants/constants';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ChevronRightIcon from '../icons/ChevronRightIcon/ChevronRightIcon';

const MenuCategoryItem = props => {
  //view more
  function renderViewMore(onPress) {
    return (
      <UnderlineTextIcon
        fontFamily={FONT_FAMILY.RobotoCondensedLight}
        fontWeight={'300'}
        fontSize={11}
        onPress={() => onPress()}
        isUnderlined={true}
        title={'show all'}
        rightIconSVG={<ChevronRightIcon />}
      />
    );
  }
  //view less
  function renderViewLess(onPress) {
    return (
      <UnderlineTextIcon
        fontFamily={FONT_FAMILY.RobotoCondensedLight}
        fontWeight={'300'}
        fontSize={11}
        onPress={() => onPress()}
        isUnderlined={true}
        title={'hide all'}
        rightIconSVG={<ChevronRightIcon />}
      />
    );
  }

  return (
    <TouchableOpacity onPress={() => props.onPress()} style={styles.mainView}>
      <View style={globalStyles.flexDirectionRow}>
        {/*--Title Start--*/}
        <Text style={styles.titleStyle}>{props.title}</Text>
        {/*--Title End--*/}

        {/*--Number of Items Start--*/}
        {props.itemNum > 0 && (
          <Text style={styles.itemNumText}>
            {'(' + props.itemNum + ' items)'}
          </Text>
        )}
        {/*--Number of Items End--*/}
      </View>

      {/*--Description Start--*/}
      <View style={globalStyles.marginTop5}>
        <Text style={styles.descriptionText}>{props.description}</Text>
      </View>
      {/*--Description End--*/}

      {/*--Review Start--*/}
      <View style={[globalStyles.marginTop5, globalStyles.flexDirectionRow]}>
        <ReviewDisplay
          marginLeftText={18}
          rating={props.rating}
          ratingNum={props.ratingNum}
          isDescriptionShown={true}
        />
      </View>
      {/*--Review End--*/}

      <View
        style={[
          globalStyles.marginTop10,
          globalStyles.flexDirectionRow,
          globalStyles.justifySpaceBetween,
        ]}>
        <View style={{width: '55%'}}>
          {/*-View More Text Container Start--*/}
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}
            textStyle={{textAlign: 'left'}}>
            <Text style={styles.moreDescriptionText}>
              {props.moreDescription}
            </Text>
          </ViewMoreText>
          {/*-View More Text Container End--*/}
        </View>

        {/*-Menu Item Image Start--*/}
        <View style={{width: '35%', alignItems: 'flex-end'}}>
          <View style={styles.imageView}>
            <CachableImage
              style={[globalStyles.flex, styles.iconImage]}
              source={{uri: props.iconImage}}
            />
          </View>
        </View>
        {/*-Menu Item Image End--*/}
      </View>
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
MenuCategoryItem.defaultProps = {
  description: '',
  iconImage: '',
  itemNum: 0,
  moreDescription: '',
  rating: 0,
  ratingNum: 0,
  title: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
MenuCategoryItem.propTypes = {
  description: PropTypes.string,
  iconImage: PropTypes.string,
  itemNum: PropTypes.number,
  moreDescription: PropTypes.string,
  onPress: PropTypes.func,
  rating: PropTypes.number,
  ratingNum: PropTypes.number,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default MenuCategoryItem;
