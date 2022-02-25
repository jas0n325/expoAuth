import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, SignupScreen} from '../scenes';
const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
