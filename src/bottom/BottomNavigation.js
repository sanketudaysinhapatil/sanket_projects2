import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
const Bottom = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Screen1"
        component={Screen1}
        options={{headerShown: false, tabBarIcon: (tabInfo) => {
            return (
              <Image
                source={require('../image/s.png')}
                style={{width: 20, height: 20, tintColor:tabInfo.focused?"blue":"black"}}
              />
            );
          }}}
      /> 
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        options={{headerShown: false,tabBarIcon: (tabInfo) => {
            return (
              <Image
                source={require('../image/s.png')}
                style={{width: 20, height: 20, tintColor:tabInfo.focused?"blue":"black"}}
              />
            );
          }}}
      />
      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Image
                source={require('../image/s.png')}
                style={{width: 20, height: 20, tintColor:tabInfo.focused?"blue":"black"}}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
