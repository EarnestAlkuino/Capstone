import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationPage = () => {
  return (
    <View style={styles.container}>
      <Text>NotificationPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationPage;
