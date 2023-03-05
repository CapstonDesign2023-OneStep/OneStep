import { StyleSheet } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR, Dark_Gary } from '../../../utils/color';
export const styles = StyleSheet.create({

    profileView:{
        //borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:'10%'
        //justifyContent:'center'
    },
    profileImageView:{
        borderColor:Dark_Gary,
        //backgroundColor:Light_Gray,
        borderWidth:1,
        borderRadius:30,
        paddingHorizontal:5,
        paddingVertical:5,
        alignItems:'center',
        justifyContent:'center',
    },
    menuView:{
        borderWidth:1,
        borderRadius:10,
        borderColor:Light_Gray,
        paddingHorizontal:'5%',
        paddingLeft:'5%',
        paddingVertical:'2%'
    },
    menuTextView:{
        borderBottomColor:Light_Gray,
        borderBottomWidth:1, 
        width:'80%'
    },
    buttonStyle:{
        //borderWidth:1,
        paddingVertical:'2%',
        flexDirection:'row',
        alignItems:'center',
    },
   
    IconStyle:{
        marginRight:'5%',
        
        alignItems:'center',
        justifyContent:'center',
        
    }
});