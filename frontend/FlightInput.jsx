import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function FlightInput() {
  const [flightNumber, setFlightNumber] = useState('');

  const handleSubmit = () => {
    console.log(`Submitted flight number: ${flightNumber}`);
    // Do something with the flight number here, such as pass it to a parent component
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Flight number"
        value={flightNumber}
        onChangeText={setFlightNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
