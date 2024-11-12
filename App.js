import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Uebersicht from './screens/HomeScreen';
import JobHinzufuegen from './screens/addJob';

const Stack = createStackNavigator();

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (name, stundenlohn) => {
    setJobs([...jobs, { name, stundenlohn }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Uebersicht">
          {(props) => <Uebersicht {...props} jobs={jobs} />}
        </Stack.Screen>
        <Stack.Screen name="JobHinzufuegen">
          {(props) => <JobHinzufuegen {...props} addJob={addJob} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;