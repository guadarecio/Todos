import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { TodosContext } from '../context/todosContext';

export const Loader = () => {
  const { isLoading } = useContext(TodosContext);

  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
});
