import { View, Text ,Dimensions,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('window'); 
const CustomTitle = (props) => {
    const {title} = props;
  return (
    <View>
     <View style={{ flexDirection: 'row', alignItems: 'center', padding: width * 0.04 }}>
          <View style={{
            backgroundColor: '#636875',
            height: height * 0.035,
            width: height * 0.035,
            borderRadius: (height * 0.035) /2,
            alignItems: 'center',
            justifyContent: 'center',
            //marginRight: width * 0.02
          }}>
           <Icon name='arrow-back-ios' size={width*0.045} color='white'/>
          </View>
          <Text
            style={{
              fontSize: height * 0.025,
              color: 'white',
              position: 'absolute',
              left: 0,
              right: 0,
              textAlign: 'center',
              fontFamily: 'Ubuntu-Medium',
              fontWeight: '600'
            }}>{title}</Text>
        </View>
    </View>
  )
}

export default CustomTitle