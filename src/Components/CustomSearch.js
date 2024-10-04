import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'

const {height,width} =Dimensions.get('window')
const CustomSearch = () => {
  return (
    <View style={{
       // paddingHorizontal:width*0.045,
        paddingVertical:height*0.02
    }}>
    <Searchbar
    iconColor='#92929D'
    //placeholder='Type name, role, etc'
    placeholderTextColor={'#92929D'}
    inputStyle={{
        fontSize:height*0.018,
       // paddingVertical:0,
       // lineHeight:height*0.025,
        marginBottom:height*0.05
    }}
    style={{
        backgroundColor:'#252836',
        height:height*0.045,
        width:width*0.91,
        alignItems:'center',
        justifyContent:'center'
    }}
    />
    </View>
  )
}

export default CustomSearch