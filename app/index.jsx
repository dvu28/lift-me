
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';

import { TamaguiProvider, Theme } from '@tamagui/core'
import config from './tamagui.config' // your configuration
import { createTamagui } from 'tamagui' // or '@tamagui/core'
import '@tamagui/core/reset.css';



import Welcome from './welcome';
import BottomNav from './bottomNav'

import ProfileScreen from './profileScreen'

const tamaguiConfig = createTamagui(config)


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <Stack.Navigator >
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});