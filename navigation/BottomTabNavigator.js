import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons from the vector-icons library
import HomePage from '../screens/HomePage'; 
import MessagePage from '../screens/MessagePage'; 
import PostPage from '../screens/PostPage';
import NotificationPage from '../screens/NotificationPage';
import ProfilePage from '../screens/ProfilePage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; // Example Ionicons icon
          } else if (route.name === 'Message') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={30} color={focused ? '#335441' : '#335441'} />; // Customize icon size and color
        },
        tabBarShowLabel: false, // Hide labels
        tabBarStyle: {
          height: 70,
          backgroundColor: '#e5f4e3',
          paddingBottom: 12,
          paddingTop: 10,
          borderRadius: 0,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 8,
          elevation: 10,
          position: 'absolute',
        },
        headerShown: false, // Remove header for all screens
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Message" component={MessagePage} />
      <Tab.Screen name="Post" component={PostPage} />
      <Tab.Screen name="Notification" component={NotificationPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
