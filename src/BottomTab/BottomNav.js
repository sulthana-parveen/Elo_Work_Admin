import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image,StyleSheet, Dimensions} from 'react-native'
import Departments from './Departments';
import DashBoard from './DashBoard/DashBoard';
import Employees from './Employees/Employees';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const iconSize = width * 0.09;
const {height,width} =Dimensions.get('window')
const CustomBottom =({state,descriptors,navigation}) => {
  return(
    <View style={{backgroundColor:'#1C1C1E'}}>
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Define the image source based on the tab
        const imageSource = {
          Dashboard: require('../../assets/icons/dashboard.png'),
          Employees: require('../../assets/icons/employees.png'),
          Departments: require('../../assets/icons/dept.png'),
        }[route.name];

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[
              styles.tabItem,
              isFocused && styles.activeTabItem, // Apply round shape on active tab
            ]}
          >
            <Image
              source={imageSource}
              style={[
                styles.iconSize,
               styles.activeIcon, // Active icon style
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  )
}
const BottomTab = createBottomTabNavigator();
const BottomNav =() =>{
    return(
      <BottomTab.Navigator screenOptions={{
       headerShown:false,
      }}
      tabBar={(props) => <CustomBottom {...props}/>}>
        <BottomTab.Screen 
        name='Employees' component={Employees}/>
         <BottomTab.Screen name='Dashboard' component={DashBoard}/>
        <BottomTab.Screen name='Departments' component={Departments}/>
     </BottomTab.Navigator>
    )
}
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: height*0.08,
    width:width,
    backgroundColor: '#30BEB6', 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  tabItem: {
   justifyContent:'center',
   alignItems:'center'
  
  },
  activeTabItem: {
    backgroundColor: '#FFFFFF78',
    width:width*0.112,
    height:height*0.05,
    borderRadius:width*0.1/2
   
  },
  // icon: {
  //   width: 28,
  //   height:28,
  //   tintColor: '#888', // Default icon color
  // },
  activeIcon: {
    tintColor: '#fff', // Change color when active
  },
});

export default BottomNav;