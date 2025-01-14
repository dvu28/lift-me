
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';


import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Pressable, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


function homeScreen () {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState('');
    return (
        <View style={styles.outerContainer}>
            <Text>This is from Home Screen</Text>
            <Calendar
                onDayPress={day => {
                console.log('selected day', day);
                setSelectedDate(day.dateString);

                }}
                markedDates={{
                [selectedDate]: {selected: true, selectedColor: '#000000'}
                }}

                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#668aff',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: '#000000',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: '#000000',
                    indicatorColor: 'red',
                    textDayFontFamily: 'sans-serif',
                    textMonthFontFamily: 'sans-serif',
                    textDayHeaderFontFamily: 'sans-serif',
                    textDayFontWeight: '550',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '500',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 15
                }}
            />
    </View>
        
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default homeScreen;