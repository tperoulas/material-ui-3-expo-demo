import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ComponentsScreen from '../screens/ComponentsScreen';
import ThemeScreen from '../screens/ThemeScreen';
import TypographyScreen from '../screens/TypographyScreen';
import MotionScreen from '../screens/MotionScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Components" component={ComponentsScreen} />
      <Stack.Screen name="Theme" component={ThemeScreen} />
      <Stack.Screen name="Typography" component={TypographyScreen} />
      <Stack.Screen name="Motion" component={MotionScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
