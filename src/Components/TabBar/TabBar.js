import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.mainTabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        //on press navigate unless navigating to the same page
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        //on long press what happens?
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[globalStyles.flex]}
            key={'tab_bar_' + index}>
            {/*--Tab Title Start--*/}
            <Text
              key={Math.random()}
              style={!isFocused ? styles.focusedText : styles.unfocusedText}>
              {label}
            </Text>
            {/*--Tab Title End--*/}

            {/*--Focused Start--*/}
            {!isFocused ? (
              <View key={Math.random()} style={styles.dashView} />
            ) : (
              <View key={Math.random()} style={styles.borderView} />
            )}
            {/*--Focused End--*/}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
