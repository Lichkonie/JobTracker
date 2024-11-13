import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/HomeScreen';
import AddJob from './screens/addJob';
import JobOverview from './screens/jobOverview';

const Stack = createStackNavigator();

function App() {
  const [jobs, setJobs] = useState([]);
  const [workindDays, setWorkingDays] = useState([])

  const addJob = (name, stundenlohn) => {
    const newJob = { ID: Date.now, Name: name, Salary: stundenlohn, workingHours:[] }
    setJobs([...jobs, newJob]);
    console.log(...jobs)
  };

  const addWorkingDay = (datum, stundnen) =>{
    setWorkingDays([...workindDays, {datum, stundnen}])
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Uebersicht" options={{title: 'Übersicht'}}>
          {(props) => <Dashboard {...props} jobs={jobs} />}
        </Stack.Screen>
        <Stack.Screen name="JobHinzufuegen">
          {(props) => <AddJob {...props} addJob={addJob} />}
        </Stack.Screen>
        <Stack.Screen name='JobOverview'>
          {(props) => <JobOverview {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;