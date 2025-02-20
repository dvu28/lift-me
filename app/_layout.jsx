import { Stack } from "expo-router";
const tamaguiConfig = createTamagui(config)
import { TamaguiProvider, Theme } from '@tamagui/core'
import config from './tamagui.config' // your configuration
import { createTamagui } from 'tamagui' // or '@tamagui/core'
export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, // Hides the header for the index screen
        }}

        
      />
      <Stack.Screen
        name="welcome"
        options={{
          headerShown: false, // Hides the header for the index screen
        }}
        />

      <Stack.Screen
        name="bottomNav"
        options={{
          headerShown: false, // Hides the header for the index screen
        }}
        />

      <Stack.Screen
        name="homeScreen"
        options={{
          headerShown: false, // Hides the header for the index screen
        }}
        />
      </Stack>

      
      </TamaguiProvider>
  );
}
