import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

const HomeScreen = () => {
  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const CalendarScreen = () => {
  return(
    <View>
      <Text>Calendar Screen</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <bottomTab.Navigator>
        <bottomTab.Screen  name='Home' component={HomeScreen} />
        <bottomTab.Screen  name='Calendar' component={CalendarScreen} />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
