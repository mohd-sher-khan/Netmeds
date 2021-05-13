import * as React from 'react';
import {StatusBar, Settings, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './layouts/CustomDrawer';
import Root from './Root';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

const Drawer = createDrawerNavigator();

const Main=()=>{

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#12BFC2"/>
    
        <NavigationContainer ref={navigationRef}>
          <Drawer.Navigator
            initialRouteName="Root"
            drawerType="front"
            drawerStyle={
              {
                // backgroundColor: PRIMARY,
                // width: '100%',
              }
            }
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Root" component={Root} />
          </Drawer.Navigator>
        </NavigationContainer>
     
    </>
  );
}

export default Main;
