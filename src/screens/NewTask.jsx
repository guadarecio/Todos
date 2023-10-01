import React, { useState, useContext } from 'react';
import { View, TextInput, Image, SafeAreaView, Alert } from 'react-native';

import { NEW_TASKS_SCREEN as strings } from '../constants/strings';
import { IMAGE_URL } from '../constants/constants';
import { globalStyles } from '../styles/globalStyles';
import { TodosContext } from '../context/todosContext';
import { BaseButton } from '../components/BaseButton';
import { Title } from '../components/Title';
import { Separator } from '../components/Separator';

export const NewTask = () => {
  const { onAddTask } = useContext(TodosContext);
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text === '') {
      Alert.alert('Add task', 'You must fill out the task field.');
      return;
    }
    const newTask = {
      id: new Date(),
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
          placeholder={strings.placeholder}
        />
        <Separator size={10} />
      </View>
      <BaseButton onPress={handleAddTask} strings={strings.addTaskText} />
      <Separator />
      <Image style={globalStyles.image} source={{ uri: IMAGE_URL }} />
      <Separator />
    </SafeAreaView>
  );
};
