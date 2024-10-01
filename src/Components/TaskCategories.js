import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const TaskCategories = ({height,width}) => {
  const TaskData = [
    {
      id:'1',
      projectName:'Healthy Sure',
      description: 'Landing Page Website',
      Percentage:'30%',
      Member1:require('../../assets/images/person1.png'),
     Member2:require('../../assets/images/person2.png'),
     Member3:require('../../assets/images/person3.png'),
    },
    {
      id:'1',
      projectName:'Healthy Sure',
      description: 'Landing Page Website',
      Percentage:'30%',
      Member1:require('../../assets/images/person1.png'),
     Member2:require('../../assets/images/person2.png'),
     Member3:require('../../assets/images/person3.png'),
    },
    {
      id:'1',
      projectName:'Healthy Sure',
      description: 'Landing Page Website',
      Percentage:'30%',
      Member1:require('../../assets/images/person1.png'),
     Member2:require('../../assets/images/person2.png'),
     Member3:require('../../assets/images/person3.png'),
    }
  ]
  return (
    <View>
      <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            //paddingLeft:width*0.04,
            paddingTop:height*0.015,
            //paddingRight:height*0.02
          }}>
         <Text style={{
            fontSize:width*0.05,
            fontWeight:700,
            fontFamily:'Ubuntu-Regular',
            color:'#FFFBFB'
         }}>Task Categories</Text>
        <Text style={{
            fontFamily:'Ubuntu-Regular',
            color:'#32936F',
            fontSize:width*0.04,
            marginTop:height*0.005
        }}>See All</Text>
        </View>
       <View style={{
        paddingHorizontal:width*0.015,
        marginVertical:height*0.03
       }}>
       <View style={{
            backgroundColor:'#2C2C2E',
            height:height*0.04,
            width:width*0.89,
            borderRadius:width*0.05,
            flexDirection:'row',
            justifyContent:'space-between',
            //padding:width*0.02
        }}>
            <TouchableHighlight style={{
               backgroundColor:'#FFFBFB',
               height:height*0.04,
            width:width*0.3,
            borderRadius:width*0.05,
            alignItems:'center',
            justifyContent:'center'
            }}>
                <Text style={{color:'black',fontFamily:'Ubuntu-Regular'}}>Ongoing</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{
              // backgroundColor:'#FFFBFB',
               height:height*0.04,
            width:width*0.3,
            borderRadius:width*0.05,
            alignItems:'center',
            justifyContent:'center'
            }}>
                <Text style={{color:'white',fontFamily:'Ubuntu-Regular'}}>Pending</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{
               //backgroundColor:'#FFFBFB',
               height:height*0.04,
            width:width*0.3,
            borderRadius:width*0.05,
            alignItems:'center',
            justifyContent:'center'
            }}>
                <Text style={{color:'white',fontFamily:'Ubuntu-Regular'}}>Completed</Text>
            </TouchableHighlight>
        </View>
       </View>
       <View style={{

       }}>
        <FlatList
        data={TaskData}
        style={{
         
        }}
        ItemSeparatorComponent={() => (
          <View style={{height:height*0.02}}></View>
        )}
        renderItem={({item}) => {
          return(
            <View style={{
              backgroundColor:'#2C2C2E',
              borderRadius:width*0.03
            }}>
              <View style={{
                padding:width*0.04
              }}>
              <Text style={{
                fontFamily:'Ubuntu-Medium',
                color:'white',
                fontSize:width*0.04
              }}>{item.projectName}</Text>
              <Text style={{
                marginTop:height*0.01,
                color:'#888B91',
                fontFamily:'Ubuntu-Regular'
              }}>{item.description}</Text>
              </View>
            </View>
          )
        }}/>
       </View>
    </View>
  )
}

export default TaskCategories