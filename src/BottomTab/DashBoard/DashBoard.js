import { View, Text, Platform, StatusBar, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AttendenceData from './components/AttendenceData';
import TaskCategories from './components/TaskCategories';

const {height,width} =Dimensions.get('window');
const DashBoard =() => {
  return (
    <SafeAreaView style={{
      backgroundColor: 'black',
      flex: 1,
      paddingHorizontal: width * 0.04,
      paddingTop: Platform.OS === 'android' ? height*0.02 : height * 0.02,
    }}>
        <StatusBar
        backgroundColor='black'
        />
       <ScrollView>
       <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            
        }}>
            <Image source={require('../../../assets/icons/menu.png')}/>
            <Image source={require('../../../assets/icons/Notification.png')}/>

        </View>
        <View style={{
            flexDirection:'row',
           // paddingLeft:width*0.04,
            paddingTop:height*0.02
          }}>
         <Text style={{
            fontSize:width*0.05,
            fontWeight:700,
            fontFamily:'Ubuntu-Regular',
            color:'#FFFBFB'
         }}>Hi Admin! </Text>
         <Image source={require('../../../assets/icons/WavingHand.png')} style={{
            width:width*0.07,
            height:height*0.03
         }}/>
        </View>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
           // paddingLeft:width*0.04,
            paddingTop:height*0.015,
            //paddingRight:height*0.02
          }}>
         <Text style={{
            fontSize:width*0.05,
            fontWeight:700,
            fontFamily:'Ubuntu-Regular',
            color:'#FFFBFB'
         }}>Today's Attendence </Text>
        <Text style={{
            fontFamily:'Ubuntu-Regular',
            color:'#32936F',
            fontSize:width*0.04,
            marginTop:height*0.005
        }}>Mon 19 Feb</Text>
        </View>
     <View>
        <AttendenceData width={width} height={height}/>
        <TaskCategories width={width} height={height}/>
     </View>
       </ScrollView>
        
    </SafeAreaView>
  )
}
export default DashBoard;