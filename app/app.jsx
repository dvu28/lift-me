
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import splash from './splash';
import welcome from './welcome';
import signIn from './signIn';
import signUp from './signUp';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating a loading time for the splash screen
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Show splash for 3 seconds

        return () => clearTimeout(timer);
    }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash'>
        {isLoading ? (
          <Stack.Screen name="Splash" component={splash} options={{ headerShown: false }} />
        ):(
          <>
          <Stack.Screen name="Welcome" component={welcome} options={{ headerShown: false }}/>
          <Stack.Screen name="Signin" component={signIn}/>
          <Stack.Screen name="Signup" component={signUp}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
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