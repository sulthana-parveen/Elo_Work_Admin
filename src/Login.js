import React from 'react';
import { Image, StatusBar, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { TextInput, Provider as PaperProvider } from 'react-native-paper';
import CustomTitle from './Components/CustomTitle';

const { width, height } = Dimensions.get('window'); 
const LoginScreen = ({navigation}) => {
  return (
   
      <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
        <StatusBar backgroundColor='black' />
         <CustomTitle
         title='Login'
         />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.02 }}>
          <Image source={require('../assets/images/logo.png')} />
          <Text style={{
            fontSize: height * 0.035,
            color: 'white',
            fontFamily: 'Lexend-Medium',
            fontWeight: '500'
          }}>elowork</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            color: '#30BEB6',
            fontFamily: 'Montserrat-Medium',
            fontWeight: '600',
            fontSize: height * 0.04,
            marginTop: height * 0.03
          }}>Hi, Admin</Text>
          <Text style={{
            fontFamily: 'Montserrat-Medium',
            fontWeight: '500',
            fontSize: height * 0.018,
            color: 'white',
            marginTop: height * 0.01
          }}>Please enter your details</Text>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: height * 0.02,
          padding: width * 0.04
        }}>
          <TextInput
            label='Email Address'
            mode='outlined'
            activeOutlineColor='darkgrey'
            textColor='#92929D'
            style={{
              width: width*0.825, 
              height: height * 0.065,
              backgroundColor: 'black',
              borderRadius: 24,
            }}
            theme={{
              roundness: 24,
              colors: {
                text: 'white',
                primary: '#30BE82',
                placeholder: 'white',
                backdrop: 'black',
                surface: 'black',
              },
            }}
          />
          <TextInput
            label='Password'
            mode='outlined'
            secureTextEntry
            activeOutlineColor='#92929D'
            textColor='#92929D'
            style={{
              width: width*0.825,
              height: height * 0.065,
              backgroundColor: 'black',
              borderRadius: 24,
              marginTop: height * 0.03
            }}
            theme={{
              roundness: 24,
              colors: {
                text: 'white',
                primary: '#30BE82',
                placeholder: 'white',
                backdrop: 'black',
                surface: 'black',
              },
            }}
          />
        </View>
        <View style={{
          alignItems: 'flex-end',
          marginRight: width * 0.08
        }}>
          <Text style={{
            color: '#636875',
            fontFamily: 'Ubuntu-Regular',
            fontSize: height * 0.018
          }}>Forget Password?</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.02 }}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Dashboard')}
          style={{
            backgroundColor: '#30BE82',
            width: width*0.827,
            height: height * 0.08,
            borderRadius: 32,
            alignContent: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontWeight: '700',
              fontFamily: 'Ubuntu-Medium',
              fontSize: height * 0.025,
              textAlign: 'center',
              color: 'white'
            }}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
   
  );
}

export default LoginScreen;
