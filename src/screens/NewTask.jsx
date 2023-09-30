import React, { useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { TodosContext } from '../context/TodosContext';

const NewTask = () => {

  const {text, setText, setTaskDescription} = useContext(TodosContext);

  const handleAddTask = () => {
    setTaskDescription(text);
  };

  return (
    <View>
      <Text>NewTask</Text>
      <Text>Description:</Text>
      <TextInput
        onChangeText={(d) => setText(d)}
        value={text}
        placeholder='Write your task here'
      />

      <Button
        title="Add Task"
        onPress={handleAddTask}
      />

    </View>
  );
};

export default NewTask;
