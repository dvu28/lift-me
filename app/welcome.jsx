import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Pressable, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


function welcome () {
    const navigation = useNavigation();

    // 
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    
    //
    const handleSignIn = () => {
        console.log('Username:', username)
        console.log('Password:', password)
    };



    return (
        <View style={styles.outerContainer}>
            <Text style={styles.header}>Hello</Text>

            <View style={styles.mainContainer}>

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
                    secureTextEntry
                />

                <Pressable style={styles.signInButton} onPress={handleSignIn}>
                    <Text style={styles.signInText}>Sign In</Text>
                </Pressable>

                <View style={styles.signUpContainer}>
                    <Text style={styles.promptSignUp}>Don't have an account?</Text>
                    <Pressable onPress={() => navigation.navigate('signUp')}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </Pressable>
                </View>
                    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    header:{
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'flex-start',
        paddingLeft: 80,
        paddingTop: 40,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

    signInButton: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 38,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        textDecorationLine: 'underline',
      },
    signInText: {
        color: 'white',
        fontWeight: 'bold'
        
    },

    signUpContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },

    promptSignUp:{
        color:'black',
        fontSize: 16,
        marginRight: 5,
    },

    signUpText:{
        fontSize: 16,
        color: 'black',
        textDecorationLine: 'underline',
    },
    
});

export default welcome;