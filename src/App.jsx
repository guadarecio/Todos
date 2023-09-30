import React from 'react';
import { View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import {TodosProvider} from './context/TodosContext';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodosProvider>
        <StackNavigator />
      </TodosProvider>
    </View>
  );
};

export default App;
