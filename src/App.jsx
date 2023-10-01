import React from 'react';
import { View } from 'react-native';
import { TodosProvider } from './context/TodosContext';
import { Navigator } from './navigation/Navigator';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodosProvider>
        <Navigator />
      </TodosProvider>
    </View>
  );
};

export default App;
