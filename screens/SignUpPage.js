import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../Components/Button'; // Import your reusable Button component

const SignupPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Create an Account</Text>

      {/* Input fields */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#808080"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#808080"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#808080"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#808080"
        secureTextEntry
      />

      {/* Signup Button */}
      <Button
        title="Sign Up"
        style={styles.signupButton}
        textStyle={styles.signupButtonText}
        onPress={() => navigation.navigate('LoginPage')} // Navigate to login after signing up
      />

      {/* Already have an account text */}
      <View style={styles.loginRedirect}>
        <Text style={styles.loginPrompt}>Already have an account?</Text>
        <Button
          title="Log In"
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
          onPress={() => navigation.navigate('LoginPage')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#335441', 
   
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#335441', // Dark green border color
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#335441', // Dark green background
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff', // White text for signup button
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginRedirect: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginPrompt: {
    color: '#808080', // Light grey text
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: 'transparent',
  },
  loginButtonText: {
    color: '#335441', // Dark green text for login button
    fontWeight: 'bold',
  },
});

export default SignupPage;
