import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogingPage from './src/app/login-page/LoginPage';
import tw from 'tailwind-rn';

export default function App() {
  return (
    <NavigationContainer>
      <View style={tw('p-3')}>
        <LogingPage></LogingPage>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
