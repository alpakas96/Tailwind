import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FlightInput from './FlightInput';
import startFirebase, { database } from './startFirebase'; // Import the database instance
import GlobalState from './GlobalState';

export default function App() {
  return (
    <GlobalState.Provider value={{ database }}>
      <View style={styles.container}>
        <FlightInput />
        <StatusBar style="auto" />
      </View>
    </GlobalState.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cream',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
