import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

function Dashboard({ navigation, jobs }) {
  const newItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('JobOverview')}>
        <Text style={styles.itemStyle}>
          Name: {item.Name}, Stundenlohn: {item.Salary}€
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Übersicht der Jobs</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={newItem}
      />
      <Button title="Neuen Job Hinzufügen" onPress={() => navigation.navigate('JobHinzufuegen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerStyle: {
    fontSize: 24,
    marginBottom: 10,
  },
  itemStyle: {
    fontSize: 18,
    marginVertical: 5,
  },
})

export default Dashboard;