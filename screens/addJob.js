import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function AddJob({ navigation, addJob }) {
  const [name, setName] = useState('');
  const [stundenlohn, setStundenlohn] = useState('');

  const handleAddJob = () => {
    if (name && stundenlohn) {
      addJob(name, stundenlohn);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Neuen Job Hinzufügen</Text>
      <TextInput
        placeholder="Job Name"
        value={name}
        onChangeText={setName}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Stundenlohn"
        value={stundenlohn}
        onChangeText={setStundenlohn}
        keyboardType="numeric"
        style={styles.textInputStyle}
      />
      <Button title="Job Hinzufügen" onPress={handleAddJob} style={styles.addJobButton}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        position: 'relative',
    },
    textStyle:{
        fontSize: 24,
        marginBottom: 15,
    },
    textInputStyle:{
        borderBottomWidth: 1,
        marginBottom: 25,
        fontSize: 18,
        padding: 5,
    },
    addJobButton:{
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
});

export default AddJob;