import React, { useContext } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Text style={{
                padding: 5,
                textAlign: 'center',
                fontSize: 40,
                fontWeight: 'bold',
                color: 'rgba(77, 82, 244, 0.8)',
                marginBottom: 20,
                marginTop: 20,
            }}>To-Do List</Text>
            <Text style={{
                marginBottom: 1,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'rgba(57, 148, 228, 0.8)',
                textAlign: 'center',
            }}>Do you want to add a new task?</Text>
            <TouchableOpacity
                style={{
                    margin: 15,
                    paddingHorizontal: 25,
                    paddingVertical: 5,
                    backgroundColor: 'rgba(221, 92, 178, 0.8)',
                    borderRadius: 30,
                }}
                onPress={() => navigate('New Task')}
            >
                <Text style={{ color: "white", fontWeight: "bold" }} >New Task</Text>
            </TouchableOpacity>
            <Text style={{
                marginTop: 30,
                marginBottom: 15,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'rgba(57, 148, 228, 0.8)',
                textAlign: 'center',
            }}>The list of your tasks: </Text>
            <FlatList
                data={taskDescription}
                renderItem={({ item }) => (

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(57, 148, 228, 0.8)',
                        padding: 15,
                        marginHorizontal: 15,
                        marginBottom: 20,
                        borderRadius: 30,
                    }}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => handleToggleTask(item.id)}
                            isChecked={item.isChecked}
                            rightText={item.description}
                            rightTextStyle={{ color: 'white', fontSize: 18 }}
                            checkBoxColor="white"
                            checkedCheckBoxColor="'rgba(77, 82, 244, 0.8)'"

                        />


                        <TouchableOpacity onPress={() => handleDeleteTask(item.description)}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    );
};

export default TasksList;