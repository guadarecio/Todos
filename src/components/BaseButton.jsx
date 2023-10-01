import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/globalStyles';

export const BaseButton = ({ onPress, strings }) => {
  return (
    <TouchableOpacity style={globalStyles.addTaskButton} onPress={onPress}>
      <Text style={globalStyles.addTaskText}>{strings}</Text>
    </TouchableOpacity>
  );
};
