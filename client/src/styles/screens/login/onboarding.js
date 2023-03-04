import { StyleSheet } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR } from '../../../utils/color';
export const styles = StyleSheet.create({

    onboardingView:{
        flex:3,
        paddingBottom:'3%',
        paddingTop:'10%',
        
        //paddingHorizontal:'10%'
    },
    buttonView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        width:'80%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
        borderWidth:2,
        borderColor:GREEN_COLOR,
        marginBottom:'3%'
    },
    buttonText:{
       color:GREEN_COLOR,
       fontSize:16,
    },
    titleText:{
        fontSize:27,
        fontWeight:'900',
        color:BLACK_COLOR,
        marginHorizontal:'10%'
    },
});