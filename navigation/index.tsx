import {createStackNavigator} from '@react-navigation/stack';
import AfterLoginStack from './AfterLoginStack';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BeforeLoginStack from './BeforeLoginStack';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setData} from '../redux/action';

const Stack = createStackNavigator();

const Navigation = () => {
  const data = useSelector(state => state?.reducerSample?.data);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      let data = await AsyncStorage.getItem('userData');
      if (data) {
        data = JSON.parse(data);
        dispatch(setData(data));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      {data ? <AfterLoginStack /> : <BeforeLoginStack />}
    </NavigationContainer>
  );
};

export default Navigation;
