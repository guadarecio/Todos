import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksList from '../screens/TasksList';
import NewTask from '../screens/NewTask';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tasks List" component={TasksList} options={{
                    headerTitleStyle: {
                        color: 'rgba(57, 148, 228, 0.8)',
                    },
                }} />
                <Stack.Screen name="New Task" component={NewTask} options={{
                    headerTitleStyle: {
                        color: 'rgba(57, 148, 228, 0.8)',
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;