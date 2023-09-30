import React, { useContext } from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TodosContext } from '../context/TodosContext';
import CheckBox from 'react-native-check-box';


const TasksList = () => {
    const { navigate } = useNavigation();
    const { taskDescription, setTaskDescription } = useContext(TodosContext);

    const handleDeleteTask = (description) => {
        const filterTask = taskDescription.filter((item) => item.description !== description);
        setTaskDescription(filterTask);
    };
    const handleToggleTask = (taskId) => {
        setTaskDescription((prevTasks) => prevTasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, isChecked: !task.isChecked };
            }
            return task;
        }));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>To-Do List</Text>
            <FlatList
                data={taskDescription}
                renderItem={({ item }) => (

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => handleToggleTask(item.id)}
                            isChecked={item.isChecked}
                            rightText={item.description}
                        />

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