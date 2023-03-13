import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { startFirebase } from '../firebase/firebaseConfig';

export default function App() {
  startFirebase;

  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    console.log(inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        onChangeText={setInputText}
        value={inputText}
        placeholder="Enter text here"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6', // cream background
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#2196F3', // blue button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', // white text
    fontSize: 16,
  },
});
