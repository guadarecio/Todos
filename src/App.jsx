import React from 'react';
import { View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { TodosContext } from './context/TodosContext';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodosContext.Provider value="dark">
        <StackNavigator />
      </TodosContext.Provider>
    </View>
  );
};

export default App;
