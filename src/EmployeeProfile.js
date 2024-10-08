import { View, Text, SafeAreaView, Dimensions, StatusBar, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import CustomTitle from './Components/CustomTitle'

const {height,width} =Dimensions.get('window')
const EmployeeProfile = () => {
  return (
   <SafeAreaView style={{
    backgroundColor: '#1C1C1E',
    flex: 1,
    paddingHorizontal: width * 0.04,
    paddingTop: Platform.OS === 'android' ? height*0.02 : height * 0.02,
  }}>
    <StatusBar backgroundColor={'#1C1C1E'}/>
    <CustomTitle 
    title={'Employee profile'}
    />
    <View style={{
        justifyContent:'center',
        alignItems:'center',
        marginTop:height*0.035
    }}>
        <Image source={require('../assets/images/rinsa.png')} style={{
            height:height*0.135,
            width:width*0.3
        }}/>
        <Text style={{
            color:'white',
            fontFamily:'Ubuntu-Regular',
            fontSize:height*0.03,
            marginTop:height*0.006
        }}>Rinsa Shajahan</Text>
        <Text style={{
            color:'#30BEB6',
            fontSize:height*0.02
        }}>UI/UX Designer</Text>
        <Text style={{
            color:'#FFFFFF',
            fontSize:height*0.02
        }}>Technical</Text>
    </View>
     <View style={{
        justifyContent:'center',
        alignItems:'center',
        margin:height*0.022
     }}>
     <TouchableOpacity style={{
          backgroundColor:'#30BE82',
          width:width*0.65,
          height:height*0.05,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:width*0.05
        }}>
          <Text style={{
            fontFamily:'Ubuntu-Medium',
            color:'#F9F4F4',
            fontSize:height*0.025
          }}>Edit</Text>
        </TouchableOpacity>
     </View>
     <Text style={{
        fontFamily:'Ubuntu-Medium',
        color:'white',
        fontSize:height*0.02,
        margin:height*0.02
     }}>Contact Details</Text>
     <View style={{
        padding:width*0.04
     }}>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
            <View style={{
                flexDirection:'row'
            }}>
             <View style={{
                backgroundColor:'#2D2E2F',
                justifyContent:'center',
                alignItems:'center',
                height:height*0.06,
                width:width*0.14,
                borderRadius:height*0.01
             }}>
               <Image source={require('../assets/icons/location.png')}/>
             </View>
             <View style={{marginHorizontal:width*0.04}}>
                <Text style={{color:'#30BE82',fontSize:height*0.019}}>Location</Text>
                <Text style={{color:'white',fontSize:height*0.019}}>Ernakulam, kerala</Text>
             </View>
            </View>
            <Image source={require('../assets/icons/edit.png')}/>
        </View>
     </View>
     <View style={{
        padding:width*0.04
     }}>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
            <View style={{
                flexDirection:'row'
            }}>
             <View style={{
                backgroundColor:'#2D2E2F',
                justifyContent:'center',
                alignItems:'center',
                height:height*0.06,
                width:width*0.14,
                borderRadius:height*0.01
             }}>
               <Image source={require('../assets/icons/phone.png')}/>
             </View>
             <View style={{marginHorizontal:width*0.04}}>
                <Text style={{color:'#30BE82',fontSize:height*0.019}}>Phone</Text>
                <Text style={{color:'white',fontSize:height*0.019}}>9076432109</Text>
             </View>
            </View>
            <Image source={require('../assets/icons/edit.png')}/>
        </View>
     </View>
     <View style={{
        padding:width*0.04
     }}>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
            <View style={{
                flexDirection:'row'
            }}>
             <View style={{
                backgroundColor:'#2D2E2F',
                justifyContent:'center',
                alignItems:'center',
                height:height*0.06,
                width:width*0.14,
                borderRadius:height*0.01
             }}>
               <Image source={require('../assets/icons/messages.png')}/>
             </View>
             <View style={{marginHorizontal:width*0.04}}>
                <Text style={{color:'#30BE82',fontSize:height*0.019}}>Email id</Text>
                <Text style={{color:'white',fontSize:height*0.019}}>rinsa@gmail.com</Text>
             </View>
            </View>
            <Image source={require('../assets/icons/edit.png')}/>
        </View>
     </View>
     <View style={{
        padding:width*0.04
     }}>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
            <View style={{
                flexDirection:'row'
            }}>
             <View style={{
                backgroundColor:'#2D2E2F',
                justifyContent:'center',
                alignItems:'center',
                height:height*0.06,
                width:width*0.14,
                borderRadius:height*0.01
             }}>
               <Image source={require('../assets/icons/location.png')}/>
             </View>
             <View style={{marginHorizontal:width*0.04}}>
                <Text style={{color:'#30BE82',fontSize:height*0.019}}>Start Date</Text>
                <Text style={{color:'white',fontSize:height*0.019}}>21 march 2024</Text>
             </View>
            </View>
            <Image source={require('../assets/icons/edit.png')}/>
        </View>
     </View>
     <View style={{
        justifyContent:'center',
        alignItems:'center',
        margin:height*0.022
     }}>
     <TouchableOpacity style={{
          backgroundColor:'#30BE82',
          width:width*0.85,
          height:height*0.05,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:width*0.05
        }}>
          <Text style={{
            fontFamily:'Ubuntu-Medium',
            color:'#F9F4F4',
            fontSize:height*0.025
          }}>Terminate Employee</Text>
        </TouchableOpacity>
     </View>
   </SafeAreaView>
  )
}

export default EmployeeProfile