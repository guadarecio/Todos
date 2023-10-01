import React from 'react';
import { View } from 'react-native';

import { TodosProvider } from './context/Context';
import { Navigator } from './navigation/Navigator';
import { Loader } from './components/Loader';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodosProvider>
        <Loader />
        <Navigator />
      </TodosProvider>
    </View>
  );
};

export default App;
