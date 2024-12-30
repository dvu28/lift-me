import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

function signIn  () {
    const navigation = useNavigation();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    
    const handleSignIn = () => {
        console.log('Username:', username)
        console.log('Password:', password)
    };


    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <TextInput
                style = {styles.input}
                placeholder = "Username"
                value = {username}
                onChangeText = {setUsername}
            />

            <TextInput
                style = {styles.input}
                placeholder = "Password"
                value = {password}
                onChangeText = {setPassword}
            />
            <Button title="Sign In" onPress={handleSignIn} />
            

            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.text}>Create an Account</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '20%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default signIn;