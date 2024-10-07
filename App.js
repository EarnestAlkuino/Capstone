import React from 'react';
import AppNavigator from './navigation/AppNavigator'; // Import your custom navigator
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      {/* Set the status bar style and background color */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Load the AppNavigator which controls your navigation */}
      <AppNavigator />
    </>
  );
}
