import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const NewTask = () => {
  const [text, setText] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  

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
