import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import { BASE_URL } from '../constants/constants';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const onAddTask = async newTask => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response.status !== 201) {
        throw new Error('Error!');
      }
      setTasks([...tasks, newTask]);
      Alert.alert('Success', 'Task added successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TodosContext.Provider value={{ tasks, setTasks, onAddTask }}>
      {children}
    </TodosContext.Provider>
  );
};
