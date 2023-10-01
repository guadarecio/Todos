import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const Title = ({ strings }) => {
  return (
    <View>
      <Text style={globalStyles.titleAdd}>{strings}</Text>
    </View>
  );
};

export default Title;
