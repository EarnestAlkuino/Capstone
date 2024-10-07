import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from '../screens/LoginPage';  // Import the login screen
import SignupPage from '../screens/SignUpPage';  // Import the signup screen
import BottomTabNavigator from './BottomTabNavigator';  // Import the tab navigator

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SignupPage" 
          component={SignupPage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MainTabs" 
          component={BottomTabNavigator}  // Navigate to BottomTabNavigator after login
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
