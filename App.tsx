/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import Screen from './component/Screen';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
