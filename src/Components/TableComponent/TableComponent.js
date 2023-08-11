import React from 'react';
import {View, ScrollView, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Publicly Available Icons that Can be Used for Commercial Purposes
import CouponIcon from '../../assets/images/couponSVG.svg';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {horizontalScale} from '../../utility/Scale';

const TableComponent = props => {
  return (
    <ScrollView
      nestedScrollEnabled
      contentContainerStyle={[globalStyles.horizontalGeneralPadding]}
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
      <View style={globalStyles.marginRight15}>
        <View
          style={[
            globalStyles.flexDirectionRow,
            {paddingHorizontal: horizontalScale(5)},
          ]}>
          {/*-- Table Columns Start --*/}
          {props.columnData.map((item, index) => {
            return (
              <View
                key={'table_component_' + index}
                style={[
                  item.width ? {width: item.width} : {flex: 1},
                  {alignItems: item.alignment},
                ]}>
                {/*-- Column Title Start --*/}
                <Text style={styles.columnText}>{item.title}</Text>
                {/*-- Column Title End --*/}
              </View>
            );
          })}
          {/*-- Table Columns End --*/}
        </View>
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          style={globalStyles.paddingTop10}>
          <View style={styles.borderView}>
            {props.rowsData.map((rowDataItem, rowDataIndex) => {
              return rowDataItem.map((item, index) => {
                return (
                  <View
                    key={'table_row_' + index}
                    style={[
                      styles.flatListView,
                      {
                        borderBottomWidth:
                          rowDataIndex === props.rowsData.length - 1 ? 0 : 0.3,
                        opacity: item.disabled ? 0.5 : 1,
                      },
                    ]}>
                    {/*-- Coupon ID Start --*/}
                    <View
                      style={[
                        globalStyles.flexDirectionRow,
                        globalStyles.alignItemsCenter,
                        globalStyles.justifyCenter,
                        {
                          width:
                            props.columnData[0].width - horizontalScale(15),
                          maxWidth: props.columnData[0].width,
                          marginHorizontal: horizontalScale(7),
                        },
                      ]}>
                      <CouponIcon />
                      <Text style={[styles.rowText, globalStyles.marginLeft9]}>
                        {item.allCouponData}
                      </Text>
                    </View>
                    {/*-- Coupon ID End --*/}

                    {/*-- Description Start --*/}
                    <View
                      style={[
                        globalStyles.alignItemsCenter,
                        styles.dashView,
                        globalStyles.justifyCenter,
                        {
                          width: props.columnData[1].width,
                          maxWidth: props.columnData[1].width,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.rowText,
                          {marginHorizontal: horizontalScale(5)},
                        ]}>
                        {item.discData}
                      </Text>
                    </View>
                    {/*-- Description End --*/}

                    {/*-- Expiry Start --*/}
                    <View
                      style={[
                        globalStyles.justifyFlexEnd,
                        globalStyles.alignItemsFlexEnd,
                        {
                          width:
                            props.columnData[2].width - horizontalScale(15),
                          maxWidth: props.columnData[2].width,
                          marginHorizontal: horizontalScale(7),
                        },
                      ]}>
                      <Text style={styles.rowText}>{item.expData}</Text>
                    </View>
                    {/*-- Expiry End --*/}
                  </View>
                );
              });
            })}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

/*---- Default Props Start -------*/
TableComponent.defaultProps = {
  columnData: [],
  rowsData: [],
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
TableComponent.propTypes = {
  columnData: PropTypes.array,
  rowsData: PropTypes.array,
};
/*---- Prop Type Expectations End -------*/
export default TableComponent;
