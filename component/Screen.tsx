import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearData, fetchData, setData} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
//   import {fetchData, setData} from '../redux/action';

const Screen1 = () => {
  const [text, setText] = useState('');
  const data = useSelector(state => state?.reducerSample?.data);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearData());
    AsyncStorage.removeItem('userData');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Screen1</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
