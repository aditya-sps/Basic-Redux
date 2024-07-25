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
import {fetchData, setData} from '../redux/action';
//   import {fetchData, setData} from '../redux/action';

const Screen = () => {
  const [text, setText] = useState('');
  const newData = useSelector(state => state?.reducerSample?.newData);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setData(text));
    setText('');
    // dispatch(fetchData());
  };

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20}}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          marginVertical: 20,
          borderRadius: 10,
        }}
        value={text}
        onChangeText={value => setText(value)}
      />
      <Button title="Add" onPress={handleClick} />
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({});
