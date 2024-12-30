import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const splash = () => {
    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
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
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default splash;