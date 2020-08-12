import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

// Nav
import Nav from './navigations';

export default function Index () {
  return (
    <View style ={styles.container}>
      <StatusBar />
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
