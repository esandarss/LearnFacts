import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Import your screens
import HomeScreen from '../screens/HomeScreen';
import RandomFactScreen from '../screens/RandomFactScreen';
import TopicSelectionScreen from '../screens/TopicSelectionScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

// Create a stack navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Authentication screens */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />

        {/* Main app screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RandomFact" component={RandomFactScreen} />
        <Stack.Screen name="TopicSelection" component={TopicSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
