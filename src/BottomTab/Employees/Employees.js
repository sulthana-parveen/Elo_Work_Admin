import { View, Text, StatusBar ,Platform, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import CustomTitle from '../../Components/CustomTitle'
import CustomSearch from '../../Components/CustomSearch'

const {height,width} = Dimensions.get('window')
const Employees = ({navigation}) => {
  const EmployeeData =[
    {
      id:'1',
      name:'Rinsa Shajahan',
      role:'UI/UX Designer',
      image:require('../../../assets/images/rinsa.png')
    },
    {
      id:'2',
      name:'Alsina Ashraf',
      role:'Creative Designer',
      image:require('../../../assets/images/alsina.png')
    },
    {
      id:'3',
      name:'Sheethal Joy',
      role:'Backend Developer',
      image:require('../../../assets/images/sheethal.png')
    },
    {
      id:'4',
      name:'Sherna Latheef',
      role:'Frontend Developer',
      image:require('../../../assets/images/sherna.png')
    },
    {
      id:'5',
      name:'Anagha K',
      role:'Graphic Designer',
      image:require('../../../assets/images/anagha.png')
    }
  ]
  const colors =['#387D7A66','#61387D66','#7D383866','#7D7C3866','#44387D66']
  const lineColors = ['#30BEB6','#8913BB','#7D3838','#7C7D38','#383F7D']
  return (
    <SafeAreaView style={{
      backgroundColor: '#1C1C1E',
      flex: 1,
      paddingHorizontal: width * 0.04,
      paddingTop: Platform.OS === 'android' ? height*0.002 : height * 0.0002,
    }}>
      <StatusBar backgroundColor='#1C1C1E'/>
      <CustomTitle
      title='Employees'/>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
       paddingHorizontal:width*0.01,
       marginTop:height*0.013
      }}>
        <Text style={{
          color:'white',
          fontFamily:'Ubuntu-Medium',
          fontSize: width*0.06,
          fontWeight:'600'
        }}>Find</Text>
       <TouchableOpacity onPress={() => navigation.navigate('AddEmployee')}>
       <Image source={require('../../../assets/icons/addperson.png')} />
       </TouchableOpacity>
      </View>
      <View>
        <CustomSearch/>
      </View>
      <View style={{
       // paddingHorizontal:height*0.02
      }}>
        <FlatList
        data={EmployeeData}
        renderItem={({item, index}) => {
          return(
            
            <View style={{
              backgroundColor:colors[index % colors.length],
              marginVertical:height*0.01,
              height:height*0.085,
              padding:height*0.01,
              borderRadius:height*0.013,
              borderLeftWidth:width*0.02,
              borderLeftColor:lineColors[index % lineColors.length]
            }}>
              <View style={{
                flexDirection:'row',
                justifyContent:'space-between'
              }}>
                 <View style={{
                  padding:height*0.007
                 }}>
                  <Text style={{
                    fontFamily:'Ubuntu-Regular',
                    color:'white',
                    fontSize:width*0.045
                  }}>{item.name}</Text>
                  <Text style={{
                    fontFamily:'Ubuntu-Regular',
                    color:'#828484',
                    fontSize:width*0.04
                  }}>{item.role}</Text>
                 </View>
                 <Image source={item.image}/>
              </View>
            </View>
          )
        }}/>
      </View>
    </SafeAreaView>
  )
}

export default Employees