import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/theme/ThemeContext';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <PaperProvider>
          <StatusBar style="auto" />
          <AppNavigator />
        </PaperProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
