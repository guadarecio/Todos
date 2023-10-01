import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TodosContext } from '../context/TodosContext';
import CheckBox from 'react-native-check-box';
import { TASKS_LIST_SCREEN as strings } from '../constants/strings';
import { globalStyles } from '../styles/globalStyles';
import BaseButton from '../components/BaseButton';
import Title from '../components/Title';

const TasksList = () => {
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
      <Text style={globalStyles.subtitle}>{strings.subtitle}</Text>
      <BaseButton
        onPress={() => navigate('New Task')}
        strings={strings.addTaskText}
      />
      <Text style={globalStyles.subtitle}>{strings.subtitleListOfTasks}</Text>
      {tasks.length === 0 ? (
        <Text style={globalStyles.verificationText}>
          {strings.verificationText}
        </Text>
      ) : (
        <View style={{ paddingHorizontal: 15 }}>
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
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default TasksList;
