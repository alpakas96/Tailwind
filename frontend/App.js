import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlightInput from './FlightInput';
import { startFirebase, database } from './startFirebase';

export default function App() {
  startFirebase();
  // database;
  return (
    <View style={styles.container}>
      <FlightInput />
      <StatusBar style="auto" />
    </View>
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


