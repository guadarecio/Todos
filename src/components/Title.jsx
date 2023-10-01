import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export const Title = ({ strings }) => {
  return <Text style={globalStyles.titleAdd}>{strings}</Text>;
};
