import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const Stack = createStackNavigator();
const RootNavigator = React.forwardRef((props, ref) => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        ref={ref}
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="App" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default RootNavigator;