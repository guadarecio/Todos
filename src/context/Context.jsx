import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

import { CONTEXT_COMPONENT as strings } from '../constants/strings';
import { BASE_URL } from '../constants/constants';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onAddTask = async newTask => {
    setIsLoading(true);
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response.status !== 201) {
        throw new Error('Error');
      }
      setTasks([...tasks, newTask]);
      setIsLoading(false);
      Alert.alert(strings.successAlertTitle, strings.successAlertMessage);
    } catch (error) {
      Alert.alert(strings.errorAlertTitle, strings.errorAlertMessage);
      setIsLoading(false);
    }
  };

  return (
    <TodosContext.Provider value={{ tasks, setTasks, onAddTask, isLoading }}>
      {children}
    </TodosContext.Provider>
  );
};
