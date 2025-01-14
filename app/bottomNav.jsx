 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
 
import homeScreen from './homeScreen';
import profileScreen from './profileScreen';
 
 
 
 
 
function bottomNav() {
  
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator

        screenOptions={ ({ route,  }) => ({
 
          tabBarIcon: ({ focused, color, size }) => {
 
            let iconName;
 
            if (route.name === 'Home') {
 
              iconName = focused ? 'home' : 'home-outline';
 
            } else if (route.name === 'Profile') {
 
              iconName = focused ? 'person' : 'person-outline';
 
            }
 
            return <Ionicons name={iconName} size={size} color={color} />;
 
          },
 
          })}
 
        tabBarOptions={{
            showLabel: false,
            activeTintColor: 'black',
            inactiveTintColor: 'black',
 
        }}
 
      >
        <Tab.Screen name="Home" component={homeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={profileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
 
   
 
  );
 
}
 
export default bottomNav;