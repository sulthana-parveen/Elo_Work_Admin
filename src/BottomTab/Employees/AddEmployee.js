import { View, Text, Dimensions ,StatusBar, Image, TouchableOpacity,TextInput, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomTitle from '../../Components/CustomTitle'
//import { TextInput } from 'react-native-paper'

const {height,width} = Dimensions.get('window')
const AddEmployee = () => {
  return (
   <SafeAreaView style={{
    backgroundColor: '#1C1C1E',
    flex: 1,
    paddingHorizontal: width * 0.04,
    paddingTop: Platform.OS === 'android' ? height*0.02 : height * 0.02,
  }}>
     <StatusBar backgroundColor='#1C1C1E'/>
     <CustomTitle
     title={'Add Employee'}
     />
     <View style={{
        alignItems:'center',
        justifyContent:'center',
        marginTop:height*0.03
     }}>
       <View style={{
       
       }}>
       <View style={{
            backgroundColor:'#C4C4C4',
            width:width*0.25,
            height:width*0.25,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:width*0.25/2
        }}>
            <Image source={require('../../../assets/icons/person.png')}/>
        </View>
       
       </View>
       <TouchableOpacity style={{position:'absolute',right:0,bottom:0,marginRight:width*0.31}}>
            <Image source={require('../../../assets/icons/edit.png')}/>
        </TouchableOpacity>
     </View>
     <ScrollView>
     <View style={{
        padding:width*0.027
     }}>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Full Name</Text>
            <TextInput 
            placeholder='Full Name'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Designation</Text>
            <TextInput 
            placeholder='Designation'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Department</Text>
            <TextInput 
            placeholder='Department'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Date of Birth</Text>
            <TextInput 
            placeholder='Date of birth'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Mobile No</Text>
            <TextInput 
            placeholder='Department'
            placeholderTextColor={'#30BEB6'}
            keyboardType='number'
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Email Address</Text>
            <TextInput 
            placeholder='Email Address'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Location</Text>
            <TextInput 
            placeholder='Location'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Start Date</Text>
            <TextInput 
            placeholder='Start Date'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Password</Text>
            <TextInput 
            placeholder='Password'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
        <View>
            <Text style={{
                color:'#FFFFFF',
                fontFamily:'Ubuntu-Regular',
                fontSize:width*0.043,
                paddingVertical:height*0.01,
                paddingHorizontal:width*0.015
            }}>Confirm Password</Text>
            <TextInput 
            placeholder='Confirm Password'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.05,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
        </View>
     </View>
     <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
          padding:height*0.004
         }}>
        <TouchableOpacity style={{
          backgroundColor:'#F9F4F4',
          width:width*0.27,
          height:height*0.045,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:width*0.05
        }} >
          <Text style={{
            fontFamily:'Ubuntu-Regular',
            color:'#30BE82'
          }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor:'#30BE82',
          width:width*0.27,
          height:height*0.045,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:width*0.05
        }}>
          <Text style={{
            fontFamily:'Ubuntu-Regular',
            color:'#F9F4F4'
          }}>Submit</Text>
        </TouchableOpacity>
         </View>
     </ScrollView>
   </SafeAreaView>
  )
}

export default AddEmployee