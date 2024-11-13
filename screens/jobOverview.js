import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function JobOverview({ navigation, addJob }) {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Arbeitszeit einfügen</Text>
      <TextInput
        placeholder="Datum"
        value={date}
        onChangeText={setDate}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Stundenlohn"
        value={hours}
        onChangeText={setHours}
        keyboardType="numeric"
        style={styles.textInputStyle}
      />
      <Button title="Job Hinzufügen" style={styles.addJobButton}/>
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

export default JobOverview;