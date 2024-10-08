import { View, Text, Image, Dimensions, StatusBar } from 'react-native'
import React from 'react'

const {height,width} = Dimensions.get('window')
const Screen1 = () => {
  return (
  
    <View style={{
       // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightgreen',
        flex:1
    }}> 
    <StatusBar backgroundColor={'lightgreen'}/>
     <Image source={require('../../assets/images/logo.png')} style={{
     height:height*0.105,
     width:width*0.3
     }}></Image>
    <Text style={{
        fontFamily:'Ubuntu-Medium',
        color:'white',
        fontSize:width*0.10
    }}>elowork</Text>
    <Image source={require('../../assets/images/Frame1.png')} style={{
        width:width*0.9,
        height:height*0.3,
        marginTop:height*0.1
    }}/>
    <View style={{
        backgroundColor:'black',
        height:height*0.4
    }}>
        <Text></Text>
    </View>
    </View>
   
  )
}

export default Screen1