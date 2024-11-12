import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

function Uebersicht({ navigation, jobs }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Übersicht der Jobs</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.itemStyle}>
            Name: {item.name}, Stundenlohn: {item.stundenlohn}€
          </Text>
        )}
      />
      <Button title="Neuen Job Hinzufügen" onPress={() => navigation.navigate('JobHinzufuegen')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    headerStyle: {
        fontSize: 24,
        marginBottom: 10,
    },
    itemStyle:{
        fontSize: 18,
        marginVertical: 5,
    },
})

export default Uebersicht;