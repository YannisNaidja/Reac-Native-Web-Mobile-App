import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogingPage from './src/app/login-page/LoginPage';
import tw from 'tailwind-rn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isMobile } from './src/app/utils/IsMobile.utils';
import SplashScreen from './src/app/splash-screen/SplashScreen';
import RegisterScreen from './src/register-screen/RegisterScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={isMobile() ? 'SplashScreen' : 'Login'}>
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
        />  
        <Stack.Screen
          name='Login'
          component={LogingPage}
        />
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
