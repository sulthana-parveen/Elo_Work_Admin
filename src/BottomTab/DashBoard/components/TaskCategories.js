import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import Icon from 'react-native-vector-icons/AntDesign'
const TaskCategories = ({height,width}) => {
  const TaskData = [
    {
      id:'1',
      projectName:'Healthy Sure',
      description: 'Landing Page Website',
      Percentage:30,
      Member1:require('../../../../assets/images/person1.png'),
     Member2:require('../../../../assets/images/person2.png'),
     Member3:require('../../../../assets/images/person3.png'),
    },
    {
      id:'2',
      projectName:'Intercom',
      description: 'Digital Product Design',
      Percentage:70,
      Member1:require('../../../../assets/images/person1.png'),
     Member2:require('../../../../assets/images/person2.png'),
     Member3:require('../../../../assets/images/person3.png'),
    },
    {
      id:'1',
      projectName:'Healthy Sure',
      description: 'Landing Page Website',
      Percentage:90,
      Member1:require('../../../../assets/images/person1.png'),
     Member2:require('../../../../assets/images/person2.png'),
     Member3:require('../../../../assets/images/person3.png'),
    }
  ]
  const getProgressColor = (percentage) => {
    if (percentage < 30) return 'red';  // Red for low percentage
    if (percentage < 70) return '#f4d35e';  // Yellow for medium percentage
    return '#30BEB6';  // Blue for high percentage
  };
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
        keyExtractor={(item) => item.id.toString()} 
        ItemSeparatorComponent={() => (
          <View style={{height:height*0.02}}></View>
        )}
        renderItem={({item}) => {
          return(
            <View style={{
              backgroundColor:'#2C2C2E',
              borderRadius:width*0.05
            }}>
             <View style={{
               padding:width*0.04,
             }}>
             <View style={{
               
                flexDirection:'row',
                justifyContent:'space-between'
              }}>
             <View>
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
             <AnimatedCircularProgress
                      size={60}
                      width={6}
                      fill={item.Percentage}
                      tintColor={getProgressColor(item.Percentage)}  // Set color based on percentage
                      backgroundColor="#3d5875"
                      style={{justifyContent:'center',alignItems:'center'}}>
                      {
                        (fill) => (
                          <Text style={{ color: 'white', fontSize: width*0.035,fontFamily:'Ubuntu-Regular' }}>
                            {`${Math.round(fill)}%`}  {/* Display percentage */}
                          </Text>
                        )
                      }
                    </AnimatedCircularProgress>
               </View>
             </View>
             <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              width:width*0.6,
              paddingHorizontal:width*0.06
             }}>
              <Text style={{
                color:'#CFD2D8'
              }}>Team</Text>
              <Text style={{
                color:'#CFD2D8'
              }}>Due date</Text>
             </View>
           <View style={{
            flexDirection:'row',
            padding:width*0.002
           }}>
           <View style={{
              flexDirection:'row',
              paddingHorizontal:width*0.06,
              paddingVertical:height*0.01
             }}>
              <Image source={item.Member1} />
              <Image source={item.Member2} style={{marginLeft:width*-0.01}}/>
              <Image source={item.Member3} style={{marginLeft:width*-0.01}}/>
              <View style={{
                 backgroundColor:'#30BEB6',
                 width:width*0.073,
                 height:height*0.034,
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:width*0.04,
                 marginLeft:width*-0.02
              }}>
                 <Text style={{color:'white'}}>+5</Text>
              </View>
             </View>
             <View style={{
              marginTop:height*0.02,
              flexDirection:'row',
              paddingHorizontal:width*0.03
             }}>
              <Icon name='calendar' color='#445668' size={width*0.04} style={{padding:width*0.001}}/>
              <Text style={{
                color:'#445668',
                fontFamily:'Ubuntu-Regular',
                marginTop:height*0.002,
                fontSize:width*0.035
              }}>  June6,2022</Text>
             </View>
           </View>
            </View>
          )
        }}/>

       </View>
    </View>
  )
}

export default TaskCategories