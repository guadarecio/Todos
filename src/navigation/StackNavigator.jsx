import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksList from '../screens/TasksList';
import NewTask from '../screens/NewTask';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tasks List">
                <Stack.Screen name="Tasks List" component={TasksList} />
                <Stack.Screen name="New Task" component={NewTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;