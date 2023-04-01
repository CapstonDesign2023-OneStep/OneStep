import { StyleSheet,Dimensions} from 'react-native';
import { Light_Gray ,Dark_Gary, GREEN_COLOR, BLACK_COLOR} from '../../utils/color';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
export const template = StyleSheet.create({

    total_container:{
        flex:1,
        backgroundColor:'white',
    },
    container:{
        flex:1,
        marginTop:"5%",
        marginLeft:"7%",
        marginRight:"7%",
    },
    titleText:{
        fontSize:16,
        color:BLACK_COLOR,
        marginBottom:'2%',
        fontWeight:"bold",
      },
    textInput:{
        borderWidth:1,
        borderColor:Dark_Gary,
        borderRadius:5,
        marginBottom:'5%',
        paddingLeft:'5%'
    },
    button:{
        backgroundColor:GREEN_COLOR,
        width:'100%',
        height:48,
        borderRadius:5,
        marginBottom:'5%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontSize:16,
    },
});