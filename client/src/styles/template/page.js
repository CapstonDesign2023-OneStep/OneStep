import { StyleSheet,Dimensions} from 'react-native';
import { Light_Gray ,Dark_Gary} from '../../utils/color';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
export const template = StyleSheet.create({

    total_container:{
        flex:1,
        backgroundColor:'white',
    },
    container:{
        flex:1,
        marginTop:30,
        marginLeft:30,
        marginRight:30,
    },
    textInput:{
        borderWidth:1,
        borderColor:Dark_Gary,
        borderRadius:5,
        marginBottom:'5%'
    },
  
});