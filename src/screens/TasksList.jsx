import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-check-box';

import { useNavigation } from '@react-navigation/native';
import { TodosContext } from '../context/todosContext';
import { TASKS_LIST_SCREEN as strings } from '../constants/strings';
import { globalStyles } from '../styles/globalStyles';
import { Separator } from '../components/Separator';
import { BaseButton } from '../components/BaseButton';
import { Title } from '../components/Title';

export const TasksList = () => {
  const { navigate } = useNavigation();
  const { tasks, setTasks } = useContext(TodosContext);

  const handleDeleteTask = id => {
    const filteredTask = tasks.filter(item => item.id !== id);
    setTasks(filteredTask);
  };
  const handleToggleTask = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, done: !task.done };
        }
        return task;
      }),
    );
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Title strings={strings.title} />
      <Separator />
      <Text style={globalStyles.subtitle}>{strings.subtitle}</Text>
      <Separator size={10} />
      <BaseButton
        onPress={() => navigate('New Task')}
        strings={strings.addTaskText}
      />
      <Separator />
      <Text style={globalStyles.subtitle}>{strings.subtitleListOfTasks}</Text>
      {tasks.length === 0 ? (
        <Text style={globalStyles.verificationText}>
          {strings.verificationText}
        </Text>
      ) : (
        <View style={{ paddingHorizontal: 15, flex: 1 }}>
          <Separator />
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <View style={globalStyles.flatListView}>
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => handleToggleTask(item.id)}
                  isChecked={item.done}
                  rightText={item.title}
                  rightTextStyle={{ color: 'white', fontSize: 18 }}
                  checkBoxColor="white"
                  checkedCheckBoxColor="rgba(77, 82, 244, 0.8)"
                />
                <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                  <Text style={globalStyles.deleteButton}>
                    {strings.deleteButton}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
