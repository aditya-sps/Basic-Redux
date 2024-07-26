import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setData} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = {
      text: text,
      password: password,
    };
    dispatch(setData(data));
    AsyncStorage.setItem('userData', JSON.stringify(data));
  };

  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          marginVertical: 20,
          borderRadius: 10,
        }}
        value={text}
        placeholder="Name"
        onChangeText={value => setText(value)}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          marginVertical: 20,
          borderRadius: 10,
        }}
        value={password}
        placeholder="Password"
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleClick} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
