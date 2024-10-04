import { View, Text, Image, StatusBar, Dimensions } from 'react-native'
import React from 'react'

const {height,width} = Dimensions.get('window')
const SplashScreen = () => {
  return (
    <View style={{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        flex:1
    }}> 
    <StatusBar backgroundColor={'black'}/>
     <Image source={require('../assets/images/logo.png')} style={{
     height:height*0.158,
     width:width*0.45
     }}></Image>
    <Text style={{
        fontFamily:'Ubuntu-Medium',
        color:'white',
        fontSize:width*0.15
    }}>elowork</Text>
    </View>
  )
}

export default SplashScreen