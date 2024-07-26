import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../component/Screen';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const BeforeLoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default BeforeLoginStack;
