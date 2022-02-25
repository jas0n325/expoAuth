import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../scenes';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
