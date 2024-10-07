import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Button from '../Components/Button'; // Reusable button component

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo1.png')} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.subText}>Sign in to continue</Text>

      {/* Input fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          placeholderTextColor="#808080"
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          placeholderTextColor="#808080"
          secureTextEntry
        />
        <Button
          title="Forgot Password?"
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
          style={{ backgroundColor: 'transparent' }}
          textStyle={styles.forgotPasswordText}
        />
      </View>

      {/* Login Button */}
      <Button
        title="Log In"
        style={styles.loginButton}
        textStyle={styles.loginButtonText}
        onPress={() => navigation.navigate('MainTabs')} // Navigating to HomePage
      />

      {/* OR Text */}
      <Text style={styles.orText}>OR</Text>

      {/* Social Login */}
      <View style={styles.socialLoginContainer}>
        <Image source={require('../assets/Facebook.png')} style={styles.socialIcon} />
        <Image source={require('../assets/ios.png')} style={styles.socialIcon} />
        <Image source={require('../assets/Google.png')} style={styles.socialIcon} />
      </View>

      {/* Sign Up Text */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpPrompt}>Don't have an account?</Text>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignupPage')}
          style={{ backgroundColor: 'transparent' }}
          textStyle={styles.signUpText}
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
  logo: {
    width: 140,
    height: 80,
    left: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 30,
    left: -80,
    fontWeight: 'bold',
    color: '#335441', // Dark green text
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    left: -80,
    color: '#808080', // Light grey text
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#335441', // Dark green border color
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  forgotPasswordText: {
    top: -20,
    alignSelf: 'flex-end',
    color: '#808080', // Light grey text
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#335441', // Dark green background
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    top: -20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  orText: {
    top: -40,
    fontSize: 16,
    color: '#808080',
    marginVertical: 20,
  },
  socialLoginContainer: {
    top: -45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 42,
    height: 42,
    resizeMode: 'contain',
  },
  signUpContainer: {
    top: -20,
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpPrompt: {
    color: '#808080',
  },
  signUpText: {
    color: '#335441',
    top: -15,
    fontWeight: 'bold',
  },
});

export default LoginPage;
