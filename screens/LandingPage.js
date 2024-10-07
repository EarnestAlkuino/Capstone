import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('LandingPage2')}>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        
        <View style={styles.dotIndicator}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  tagline: {
    fontSize: 18,
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
  },
  dotIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  dot: {
    width: 8,
    height: 8,
    top: 140,
    left: 80,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#405e40', // Active dot color (dark green)
  },
});
