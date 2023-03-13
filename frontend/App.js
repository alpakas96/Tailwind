import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlightInput from './FlightInput';
import { startFirebase } from './startFirebase';

export default function App() {
  startFirebase;
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

