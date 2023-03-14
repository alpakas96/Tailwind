import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlightInput from './FlightInput';
import { startFirebase } from './startFirebase';
import { useState } from 'react';

// this is the global state
export const GlobalState = React.createContext(null);

export default function App() {
  
  // this returns the database object
  const [database , setDatabase] = useState(startFirebase());

  return (
    <GlobalState.Provider value={database}>
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
    backgroundColor: 'creme',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


