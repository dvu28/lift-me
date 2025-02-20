import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, TextInput} from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';



function profileScreen () {
  const [date, setDate] = useState(dayjs());


  return (
    <View style={styles.container}>
      <Text>This is the Profile Screen</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    
  }
 
});

export default profileScreen;