import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TodosContext } from '../context/TodosContext';


const TasksList = () => {
    const { navigate } = useNavigation();
    const { taskDescription } = useContext(TodosContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>To-Do List</Text>
            <Text>{taskDescription}</Text>
            <Text>Do you want to add a new task?</Text>
            <Button
                title="New Task"
                onPress={() => navigate('New Task')}
            />
        </View>
    );
};

export default TasksList;