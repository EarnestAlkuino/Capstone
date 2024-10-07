import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Data for the auction categories
const auctionCategories = [
  { id: '1', title: 'Cattle Auctions', icon: require('../assets/cattle.png') },
  { id: '2', title: 'Horse Auctions', icon: require('../assets/horse.png') },
  { id: '3', title: 'Carabao Auctions', icon: require('../assets/carabao.png') },
  { id: '4', title: 'Pig Auctions', icon: require('../assets/pig.png') },
  { id: '5', title: 'Sheep Auctions', icon: require('../assets/sheep.png') },
  { id: '6', title: 'Goat Auctions', icon: require('../assets/goat.png') },
];

const HomePage = ({ navigation }) => {
  // Render each auction category
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => navigation.navigate('AuctionPage', { category: item.title })}  // Navigate to Auction Page with selected category
    >
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image source={require('../assets/logo1.png')} style={styles.logo} />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image source={require('../assets/Search.png')} style={styles.searchIcon} />
        <Text style={styles.searchText}>Search</Text>
      </View>

      {/* Grid of Auction Categories */}
      <FlatList
        data={auctionCategories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',  // Background color for the search container
    borderRadius: 10,            // Rounded corners
    padding: 10,                 // Padding inside the container
    marginBottom: 20,            // Space below the search container
    width: '110%',                // Set the width to 90% of the screen
    height: 38,                  // Adjust the height to make it taller or shorter
    alignSelf: 'center',
    
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchText: {
    fontSize: 16,
    color: '#808080',
  },
  grid: {
    justifyContent: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  categoryContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryIcon: {
    width: 100, // Set a fixed width for images to keep them uniform
    height: 100, // Set a fixed height for the images
    resizeMode: 'contain',  // Make sure the image scales correctly
    marginBottom: 2,  // Spacing between image and text
  },
  categoryTitle: {
    fontSize: 14,
    color: '#405e40',  // Dark green text
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomePage;
