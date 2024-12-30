import React, { useState, useEffect } from 'react';

import { View, TextInput, Button, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function signUp () {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Add your sign-up logic here (e.g., API call)
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        // Navigate to Home or another screen after successful signup
        // navigation.navigate('Home');
    };

    return (
        <View style={styles.mainContainer}>
            
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
           


            <Pressable style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpText}>Create Account</Text>
            </Pressable>

            <View style={styles.signInContainer}>
            <Text style={styles.promptSignIn}>Have an account already?</Text>
                <Pressable onPress={() => navigation.navigate("welcome")}>
                    <Text style={styles.signInText}>Sign In</Text>
                </Pressable>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    signUpButton:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 38,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },

    signUpText :{
        color: 'white',
        fontWeight: 'bold'
    },

    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20
    },

    promptSignIn :{
        color:'black',
        fontSize: 16,
        marginRight: 5,
    },

    signInText: {
        textDecorationLine: 'underline'
    },

});

export default signUp;