import React, { useContext } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TodosContext } from '../context/TodosContext';
import GlobalStyles from '../global_styles/GlobalStyles';
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Text style={GlobalStyles.titleAdd}>To-Do List</Text>
            <Text style={GlobalStyles.subtitle}>Do you want to add a new task?</Text>
            <TouchableOpacity
                style={GlobalStyles.addTaskButton}
                onPress={() => navigate('New Task')}
            >
                <Text style={GlobalStyles.addTaskText}>New Task</Text>
            </TouchableOpacity>
            <Text style={GlobalStyles.subtitle}>The list of your tasks: </Text>
            <FlatList
                data={taskDescription}
                renderItem={({ item }) => (
                    <View style={GlobalStyles.flatListView}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => handleToggleTask(item.id)}
                            isChecked={item.isChecked}
                            rightText={item.description}
                            rightTextStyle={{ color: 'white', fontSize: 18 }}
                            checkBoxColor="white"
                            checkedCheckBoxColor="rgba(77, 82, 244, 0.8)"
                        />
                        <TouchableOpacity onPress={() => handleDeleteTask(item.description)}>
                            <Text style={GlobalStyles.deleteButton}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

export default TasksList;