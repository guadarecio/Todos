import React, { useState, useContext, useId } from 'react';
import { View, TextInput, Image, SafeAreaView, Alert } from 'react-native';
import { TodosContext } from '../context/TodosContext';
import { NEW_TASKS_SCREEN as strings } from '../constants/strings';
import { IMAGE_URL } from '../constants/constants';
import { globalStyles } from '../styles/globalStyles';
import BaseButton from '../components/BaseButton';
import Title from '../components/Title';

const NewTask = () => {
  const taskId = useId();
  const [text, setText] = useState('');
  const { onAddTask } = useContext(TodosContext);

  const handleAddTask = () => {
    if (text === '') {
      Alert.alert('Add task', 'You must fill out the task field.');
      return;
    }

    const newTask = {
      id: taskId,
      title: text,
      body: 'bar',
      done: false,
      userId: 1,
    };

    setText('');
    onAddTask(newTask);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Title strings={strings.titleAdd} />
      <View style={globalStyles.textInputView}>
        <TextInput
          style={globalStyles.textInput}
          onChangeText={setText}
          value={text}
          placeholder="Write your task here"
        />
      </View>
      <BaseButton onPress={handleAddTask} strings={strings.addTaskText} />
      <View style={globalStyles.imageView}>
        <Image style={globalStyles.image} source={{ uri: IMAGE_URL }} />
      </View>
    </SafeAreaView>
  );
};

export default NewTask;
