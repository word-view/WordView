import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setUserToken(token: string) {
  return await AsyncStorage.setItem('token', token);
}

export async function getUserToken() {
  return await AsyncStorage.getItem('token');
}
