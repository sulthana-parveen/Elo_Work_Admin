import { View, Text, Dimensions, StatusBar ,TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomTitle from './Components/CustomTitle'

const {height,width} =Dimensions.get('window')
const TerminateEmployee = () => {
  return (
    <SafeAreaView style={{
        backgroundColor: '#1C1C1E',
        flex: 1,
        paddingHorizontal: width * 0.04,
        paddingTop: Platform.OS === 'android' ? height*0.02 : height * 0.02,
      }}>
        <StatusBar backgroundColor={'#1C1C1E'}/>
        <CustomTitle
        title={'Terminate Employee'}/>
        <View style={{
         marginVertical:height*0.03
        }}>
            <Text style={{
                color:'white',
                fontSize:width*0.07,
                fontFamily:'Ubuntu-Medium'
            }}>Are you sure you want to \n  terminate?</Text>
            <Text style={{
                color:'white',
                fontFamily:'Ubuntu-Regular',
                fontSize:height*0.03,
               // margin:height*0.01
            }}>Rinsa Shajahan</Text>
             <Text style={{
                color:'#30BEB6',
                fontFamily:'Ubuntu-Regular',
                fontSize:height*0.023,
                //margin:height*0.005
            }}>UI/UX Designer</Text>
        </View>
        <View style={{
            marginTop:height*0.001
        }}>
            <Text style={{
                fontSize:height*0.03,
                color:'white',
                fontFamily:'Ubuntu-Medium'
            }}>Reason</Text>
        </View>
       <View style={{
        margin:height*0.01
       }}>
       <TextInput 
            placeholder='Choose a reason'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.04,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
            </View>
            <View style={{
        margin:height*0.01
       }}>
             <TextInput 
            placeholder='Description'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.2,
                borderRadius: width * 0.04,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
       </View>
       <View style={{
            marginTop:height*0.001
        }}>
            <Text style={{
                fontSize:height*0.03,
                color:'white',
                fontFamily:'Ubuntu-Medium'
            }}>Last working day</Text>
        </View>
       <View style={{
        margin:height*0.01
       }}>
       <TextInput 
            placeholder='Choose a date'
            placeholderTextColor={'#30BEB6'}
            
            style={{
                backgroundColor:'#2D2E2F',
                fontSize:width*0.035,
                height:height*0.06,
                borderRadius: width * 0.04,
                padding:width*0.03,
                color:'#FFFFFF',
            }}
            />
            </View>
    </SafeAreaView>
  )
}

export default TerminateEmployee