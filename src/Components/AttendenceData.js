import { View, Text, FlatList } from 'react-native'
import React from 'react'

const AttendenceData = ({height,width}) => {
    
    const data =[
        {
            id:'1',
            heading:' Total \n Active',
            count:'47',
            borderClr:'lightblue',
            textClr:'#FFFFFF'
        },
        {
            id:'2',
            heading:' Total \n WFH',
            count:'3',
            borderClr:'#A3D139',
            textClr:'#FFFFFF'
        },
        {
            id:'3',
            heading:'  Total \n  Half Day',
            count:'3',
            borderClr:'#30BEB6',
            textClr:'#FFFFFF'
        },
        {
            id:'4',
            heading:' Total \n Leave',
            count:'1',
            borderClr:'#F47A70',
            textClr:'#FFFFFF'
        },
        
    ]
  return (
    <View style={{
       // paddingRight:width*0.02,
       // paddingLeft:width*0.02,
        paddingTop:height*0.03
        
    }}>
     <FlatList
     data={data}
     numColumns={2}
     style={{
    
     }}
     renderItem={({item}) => {
        return(
            <View style={{
                borderColor:item.borderClr,
                borderWidth:width*0.006,
                width:width*0.43,
                height:height*0.13,
                borderRadius:width*0.05,
                margin: width * 0.02,
            }}>
                <Text style={{
                    fontSize:width*0.045,
                    padding:width*0.03,
                    color:item.textClr,
                    fontFamily:'Ubuntu-Medium'
                }}>{item.heading}</Text>
                <Text style={{
                    fontSize:width*0.055,
                     marginLeft:width*0.05,
                    fontWeight:'800',
                    color:item.borderClr,
                    fontFamily:'Ubuntu-Medium'
                }}>{item.count}</Text>
            </View>
        )
     }}/>
    </View>
  )
}

export default AttendenceData