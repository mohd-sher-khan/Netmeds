import 'react-native-gesture-handler';

import * as React from 'react';


import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from "./Home";
import Login from './Login';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();




const Tab1 = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen
        name="Logi"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="settings"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
    </Tab.Navigator>
  );
};

export default Tab1;
