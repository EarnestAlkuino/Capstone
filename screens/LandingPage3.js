import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Button from '../Components/Button'; // Import the reusable button component

const LandingPage3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Login Button */}
      <Button
        title="Login"
        onPress={() => navigation.navigate('LoginPage')} // This directs to the LoginPage
        style={styles.loginButton} // Customize the button style
        textStyle={styles.loginButtonText} // Customize the text style
      />

      {/* Signup Button */}
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignupPage')} // Assuming there is a SignupPage
        style={styles.signupButton} // Border only, transparent background
        textStyle={styles.signupButtonText} // Customize the text color to dark green
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#405e40', // Dark green background for login button
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff', // White text for login button
    fontWeight: 'bold',
  },
  signupButton: {
    width: '80%',
    backgroundColor: 'transparent', // Transparent background for signup button
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: '#405e40', // Dark green border
    borderWidth: 2,
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#405e40', // Dark green text for signup button
    fontWeight: 'bold',
  },
});

export default LandingPage3;
