import React, {useReducer, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CustomHeader from './layouts/CustomHeader.js';
import Onboarding from "./screens/Onboarding"
import Login from './screens/Login.js';
import Home from './screens/Home.js';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions=
        {{
          header: (props) => <CustomHeader {...props} />,
        }}
        initialRouteName="Onboarding">

        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />

<Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
<Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
          }}
        />



      </Stack.Navigator>
      
    </>
  );
};

export default Root;
