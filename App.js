import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalandarScreen';

const bottomTab = createBottomTabNavigator();

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

