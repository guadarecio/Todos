import React, { useContext } from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TodosContext } from '../context/TodosContext';


const TasksList = () => {
    const { navigate } = useNavigation();
    const { taskDescription, setTaskDescription } = useContext(TodosContext);

    const handleDeleteTask = (description) => {
        const filterTask = taskDescription.filter((item) => item.description !== description);
        setTaskDescription(filterTask);
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text>To-Do List</Text>
            <FlatList
                data={taskDescription}
                renderItem={({ item }) => (
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text>{item.description}</Text>
                        <Button title="Delete" onPress={() => handleDeleteTask(item.description)} />
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <Text>Do you want to add a new task?</Text>
            <Button
                title="New Task"
                onPress={() => navigate('New Task')}
            />
        </SafeAreaView>
    );
};

export default TasksList;