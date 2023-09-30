import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';
import { TodosContext } from '../context/TodosContext';
import GlobalStyles from '../global_styles/GlobalStyles';

const NewTask = () => {
  const { text, setText, handleAddTask } = useContext(TodosContext);
  const handleAddTaskWithValidation = () => {
    if (text.trim() === '') {
      Alert.alert('Add task', 'You must fill out the task field.');
    } else {
      handleAddTask();
    }
  };
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleAdd}>Add your new task here!</Text>
      <View style={GlobalStyles.textInputView}>
        <TextInput
          style={GlobalStyles.textInput}
          onChangeText={(d) => setText(d)}
          value={text}
          placeholder='Write your task here'
        />
      </View>
      <TouchableOpacity style={GlobalStyles.addTaskButton} onPress={handleAddTaskWithValidation} >
        <Text style={GlobalStyles.addTaskText}>Add Task</Text>
      </TouchableOpacity>
      <View style={GlobalStyles.imageView}>
        <Image
          style={GlobalStyles.image}
          source={{ uri: 'https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU' }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewTask;
