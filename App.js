// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import store from './store'
import { Provider } from 'react-redux';
import Route from './route';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Route />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
