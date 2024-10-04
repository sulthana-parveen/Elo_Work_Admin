
import { View, Text, Platform, StatusBar, Dimensions, Image, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTitle from '../Components/CustomTitle';
import CustomSearch from '../Components/CustomSearch';
import Modal from 'react-native-modal'; // Import react-native-modal

const { height, width } = Dimensions.get('window');

const Departments = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [newDeptName, setNewDeptName] = useState('');

  const departmentData = [
    {
      id: '1',
      name: 'Tech',
      Count: '5',
      icon: require('../../assets/icons/tech.png'),
    },
    {
      id: '2',
      name: 'Creative',
      Count: '7',
      icon: require('../../assets/icons/creative.png'),
    },
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addDepartment = () => {
    if (newDeptName.trim()) {
      // Add logic to handle adding department here
      console.log('New Department:', newDeptName);
      setNewDeptName('');
      toggleModal();
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#1C1C1E',
        flex: 1,
        paddingHorizontal: width * 0.04,
        paddingTop: Platform.OS === 'android' ? height * 0.002 : height * 0.002,
      }}>
      <StatusBar backgroundColor={'#1C1C1E'} />
      <CustomTitle title='Departments' />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal:width*0.01,
          marginTop:height*0.013,
          justifyContent:'space-between'
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily:'Ubuntu-Medium',
          fontSize: width*0.06,
          fontWeight:'600'
          }}>
          Find
        </Text>
        {/* Trigger modal on icon press */}
        <TouchableOpacity onPress={toggleModal}>
          <Image source={require('../../assets/icons/departments.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <CustomSearch />
      </View>
      <View>
        <FlatList
          data={departmentData}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  paddingHorizontal: height * 0.015,
                  margin: height * 0.006,
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      backgroundColor: '#252836',
                      height: height * 0.07,
                      width: width * 0.17,
                      borderRadius: height * 0.004,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.icon}
                      style={{
                        height: height * 0.055,
                        width: width * 0.12,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      paddingHorizontal: width * 0.03,
                    }}>
                    <Text
                      style={{
                        color: '#30BEB6',
                        fontFamily: 'Ubuntu-Regular',
                        fontSize: width * 0.05,
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{ color: 'white' , fontSize: width * 0.04,}}>{item.Count} members</Text>
                  </View>
                  <View
                    style={{
                      marginLeft: width * 0.37,
                    }}>
                    <Image source={require('../../assets/icons/edit.png')} />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

     
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal} 
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View
          style={{
            backgroundColor: '#000000',
            padding: height * 0.03,
            borderTopLeftRadius: width*0.1,
            borderTopRightRadius: width*0.1,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: width * 0.045,
              fontFamily: 'Ubuntu-Medium',
              marginBottom: height * 0.02,
              textAlign:'center'
            }}>
            Add New Department
          </Text>
          <TextInput
            placeholder='Enter department name'
            placeholderTextColor='#30BEB6'
            style={{
              backgroundColor: '#2D2E2F',
              color: 'white',
              padding: height * 0.01,
              borderRadius: width*0.04,
              fontSize: width * 0.035,
              marginBottom: height * 0.02,
            }}
            value={newDeptName}
            onChangeText={setNewDeptName}
          />
         <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly'
         }}>
        <TouchableOpacity style={{
          backgroundColor:'#F9F4F4',
          width:width*0.25,
          height:height*0.04,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:width*0.05
        }} onPress={toggleModal}>
          <Text style={{
            fontFamily:'Ubuntu-Regular',
            color:'#30BE82'
          }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor:'#30BE82',
          width:width*0.25,
          height:height*0.04,
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
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Departments;
