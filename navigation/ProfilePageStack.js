import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import ProfilePage from '../screens/ProfilePage';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const ProfilePageStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, color: '#405e40' }}>Back</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#e5f4e3',
          },
          headerTitle: '', // No title
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfilePageStack;
