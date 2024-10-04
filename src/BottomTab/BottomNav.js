import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Departments from './Departments';
import DashBoard from './DashBoard/DashBoard';
import Employees from './Employees';

const BottomTab = createMaterialBottomTabNavigator();
const BottomNav =() =>{
    return(
      <BottomTab.Navigator screenOptions={{
        tabBarStyle: {
            backgroundColor: '#30BEB6', 
          },
      }}>
        <BottomTab.Screen 
        name='Employees' component={Employees}/>
         <BottomTab.Screen name='Dashboard' component={DashBoard}/>
        <BottomTab.Screen name='Departments' component={Departments}/>
     </BottomTab.Navigator>
    )
}
export default BottomNav;