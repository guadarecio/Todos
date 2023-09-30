import React, { useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { TodosContext } from '../context/TodosContext';

const NewTask = () => {
  const { text, setText, handleAddTask } = useContext(TodosContext);

  return (
    <View>
      <Text>NewTask</Text>
      <Text>Description:</Text>
      <TextInput
        onChangeText={(d) => setText(d)}
        value={text}
        placeholder='Write your task here'
        clearButtonMode="always"
      />

      <Button
        title="Add Task"
        onPress={handleAddTask}
      />

    </View>
  );
};

export default NewTask;
