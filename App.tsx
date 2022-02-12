import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {  StyleSheet } from 'react-native';
import LogingPage from './src/app/common/login-page/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isMobile } from './src/app/utils/IsMobile.utils';
import SplashScreen from './src/app/mobile/splash-screen/SplashScreen';
import RegisterScreen from './src/app/common/register-screen/RegisterScreen';
import 'react-native-gesture-handler';
import WebNavigation from './src/app/web/web-navigation/WebNavigation';
import MobileNavigation from './src/app/mobile/mobile-navigation/MobileNavigation';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './src/app/utils/ThemeProvider';


const Stack = createNativeStackNavigator();



export default function App() {
  const linking = {
    prefixes: [],
    config: {
      screens: {
        Login: "login",
        RegisterScreen: "register",
        WebNavigation: 'user'
      }
    }
  };
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <NavigationContainer linking={linking}>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isMobile() ? 'SplashScreen' : 'Login'}>
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
            {isMobile() ?
              <Stack.Screen
                name='MobileNavigation'
                component={MobileNavigation}
              /> : <Stack.Screen
                name='WebNavigation'
                component={WebNavigation}
              />
            }
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
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
