import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Button from '../Components/Button'; // Import the Button component

const LandingPage2 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        
        {/* Tagline with specific styling for "farmers" and "auctions" */}
        <Text style={styles.tagline}>
          <Text style={styles.highlightedText1}>farmers</Text> 
          <Text style={styles.highlightedText2}>farmers</Text>, 
          <Text style={styles.highlightedText3}>Transforming</Text> 
          <Text style={styles.highlightedText4}>auctions</Text>.
        </Text>

        {/* Using the Button component */}
        <Button
          title="GET STARTED"
          onPress={() => navigation.navigate('LandingPage3')} // Define where the button navigates
          style={styles.getStartedButton} // Custom button styles
          textStyle={styles.getStartedButtonText} // Custom text styles
        />

        {/* Dot indicator (custom styling) */}
        <View style={styles.dotIndicator}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
      </View>
    </ScrollView>
  );
};

export default LandingPage2;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  tagline: {
    fontSize: 16,
    fontWeight: 'bold', // Entire tagline is bold
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
  },
  highlightedText1: {
    color: '#DFAE47', // Specific color for "farmers" and "auctions"
  },
  highlightedText2: {
    color: '#335441', // Specific color for "farmers" and "auctions"
  },
  highlightedText3: {
    color: '#DFAE47', // Specific color for "farmers" and "auctions"
  },
  highlightedText4: {
    color: '#335441', // Specific color for "farmers" and "auctions"
  },
  getStartedButton: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#335441', // Custom button background
    paddingVertical: 8,
    borderRadius: 12, // Rounded corners
    elevation: 2,
    top: 100,
  },
  getStartedButtonText: {
    fontSize: 18, // Larger text size
    color: '#FFF', // White text
    fontWeight: 'bold',
  },
  dotIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    top: 140,
    left: 80,
  },
  activeDot: {
    backgroundColor: '#405e40', // Dark green for active dot
  },
});
