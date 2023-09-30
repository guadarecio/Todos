import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { TodosContext } from '../context/TodosContext';

const NewTask = () => {
  const { text, setText, handleAddTask } = useContext(TodosContext);

  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{
          padding: 5,

          fontSize: 40,
          fontWeight: 'bold',
          color: 'rgba(77, 82, 244, 0.8)',
        }}>Add you new task here!</Text>

      </View>
      <TextInput
        style={{
          backgroundColor: 'rgba(57, 148, 228, 0.8)',
          padding: 60,
          marginBottom: 30,
          borderRadius: 30,
        }}
        onChangeText={(d) => setText(d)}
        value={text}
        placeholder='Write your task here'
        clearButtonMode="always"
      />

      <TouchableOpacity
        style={{
          margin: 15,
          paddingHorizontal: 25,
          paddingVertical: 5,
          backgroundColor: 'rgba(221, 92, 178, 0.8)',
          borderRadius: 30,

        }}

        onPress={handleAddTask}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Add Task</Text>
      </TouchableOpacity>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={{ uri: 'https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU' }}
      />
    </View>
  );
};

export default NewTask;
