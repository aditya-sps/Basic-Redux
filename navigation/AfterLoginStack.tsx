import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../component/Screen';

const Stack = createStackNavigator();

const AfterLoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
    </Stack.Navigator>
  );
};

export default AfterLoginStack;
