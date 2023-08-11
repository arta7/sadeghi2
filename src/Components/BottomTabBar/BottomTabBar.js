import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const BottomTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  /*--- Check if tab bar should be visible or not, and if not return nothing---*/
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.borderView}>
        <View style={styles.itemView}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            // What is the label of the item in the bottom tab?
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            // get the correct icon to display for both active or inactive items
            const icon = options.tabBarIcon;
            const activeIcon = options.activeTabBarIcon;

            const isFocused = state.index === index;

            //Navigate on press, unless already there
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            //on long press function
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            //return the bottom tab single item
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={globalStyles.alignItemsCenter}
                key={'bottom_tab_bar' + index}>
                {isFocused ? activeIcon : icon}
                <Text
                  style={
                    isFocused
                      ? styles.focusedItemText
                      : styles.unFocusedItemText
                  }>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default BottomTabBar;
