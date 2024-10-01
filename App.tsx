import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginScreen from './src/Login';
import BottomNav from './src/BottomTab/BottomNav';
import DashBoard from './src/BottomTab/DashBoard';

const Stack= createStackNavigator();
const App =() =>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Dashboard' component={DashBoard}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;